import Image from 'next/image';
import Link from 'next/link';
import { PostSummary } from 'lib/api';
import DateFormatter from '../date-formatter';
import { SeriesBadge } from '../series-badge';
import PostTitle from './post-title';
import { Translate } from '../../../core/utils/translate';

type Props = {
  post: PostSummary;
  author: string;
};

const PostHeader = ({ post, author }: Props) => {
  return (
    <header>
      <div className="max-w-4xl">
        <Link
          href="/blog"
          className="text-sm text-ink-600 transition-colors hover:text-ink"
        >
          ← {Translate('blog.back')}
        </Link>

        {post.series && (
          <div className="mt-8 flex items-center gap-3">
            <SeriesBadge series={post.series} />
            <span className="font-display text-sm text-ink-600">
              {post.series.name}
            </span>
          </div>
        )}

        <div className="mt-4">
          <PostTitle>{post.shortTitle}</PostTitle>
        </div>

        {post.excerpt && (
          <p className="mt-5 max-w-2xl text-xl font-light leading-relaxed text-ink-600">
            {post.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-600">
          <span className="font-medium text-ink">{author}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-yellow-600" />
          <DateFormatter dateString={post.date} />
          <span aria-hidden className="h-1 w-1 rounded-full bg-yellow-600" />
          <span>
            {post.readingTime} {Translate('blog.minutes')}
          </span>
        </div>
      </div>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-paper-200 md:aspect-[21/9]">
        <Image
          src={post.wideCover}
          alt=""
          fill
          priority
          sizes="(min-width: 1344px) 1344px, 100vw"
          className="object-cover"
        />
      </div>
    </header>
  );
};

export default PostHeader;
