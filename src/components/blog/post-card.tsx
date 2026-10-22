import Image from 'next/image';
import Link from 'next/link';
import { PostSummary } from 'lib/api';
import DateFormatter from './date-formatter';
import { SeriesBadge } from './series-badge';
import { Translate } from '../../core/utils/translate';

type Props = {
  post: PostSummary;
  priority?: boolean;
};

const Meta = ({ post }: { post: PostSummary }) => (
  <div className="flex items-center gap-2 text-xs text-ink-400">
    <DateFormatter dateString={post.date} />
    <span aria-hidden className="h-1 w-1 rounded-full bg-yellow-600" />
    <span>
      {post.readingTime} {Translate('blog.minutes')}
    </span>
  </div>
);

export const PostCard = ({ post, priority = false }: Props) => {
  return (
    <Link
      href={`/blog/post/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-white/60 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-yellow-500)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-200">
        <Image
          src={post.cover}
          alt=""
          width={720}
          height={450}
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {post.series && (
          <SeriesBadge series={post.series} className="absolute left-4 top-4" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">
          {post.shortTitle}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
          {post.excerpt}
        </p>
        <div className="mt-5">
          <Meta post={post} />
        </div>
      </div>
    </Link>
  );
};

export const FeaturedPostCard = ({ post }: Props) => {
  return (
    <Link
      href={`/blog/post/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl bg-ink text-paper lg:grid-cols-12"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[26rem]">
        <Image
          src={post.wideCover}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between gap-10 p-6 sm:p-8 lg:col-span-5 lg:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-yellow-500 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-ink">
              {Translate('blog.latest')}
            </span>
            {post.series && (
              <span className="font-display text-xs uppercase tracking-wider text-ink-400">
                {post.series.name} · {Translate('blog.part')}{' '}
                {String(post.series.number).padStart(2, '0')}
              </span>
            )}
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {post.shortTitle}
          </h2>
          <p className="mt-4 max-w-md text-paper-300/80">{post.excerpt}</p>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="text-xs text-ink-400">
            <DateFormatter dateString={post.date} /> · {post.readingTime}{' '}
            {Translate('blog.minutes')}
          </div>
          <span className="rounded-full border border-ink-600 px-4 py-2 text-sm font-medium transition-colors group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-ink">
            {Translate('blog.read')} →
          </span>
        </div>
      </div>
    </Link>
  );
};
