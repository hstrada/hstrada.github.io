import Image from 'next/image';
import Link from 'next/link';
import { PostSummary } from 'lib/api';
import DateFormatter from './date-formatter';
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
        {post.journey && (
          <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-yellow-500 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-ink">
            {post.journey.name} · {post.journey.lesson}/{post.journey.total}
          </span>
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
