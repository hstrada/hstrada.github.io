import Link from 'next/link';
import { PostSeries, PostSummary } from 'lib/api';
import { Translate } from '../../../core/utils/translate';

type Props = {
  series: PostSeries;
  posts: PostSummary[];
  currentSlug: string;
};

export const SeriesNav = ({ series, posts, currentSlug }: Props) => {
  return (
    <nav aria-label={Translate('blog.in_series')}>
      <p className="eyebrow">{Translate('blog.in_series')}</p>
      <Link
        href={`/blog?serie=${encodeURIComponent(series.key)}`}
        className="mt-2 block font-display text-lg font-semibold hover:underline"
      >
        {series.name}
      </Link>
      <ol className="mt-4 space-y-1">
        {posts.map((post) => {
          const current = post.slug === currentSlug;
          return (
            <li key={post.slug}>
              <Link
                href={`/blog/post/${post.slug}`}
                aria-current={current ? 'page' : undefined}
                className={`flex gap-3 rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                  current
                    ? 'bg-yellow-500 font-medium text-ink'
                    : 'text-ink-600 hover:bg-paper-200 hover:text-ink'
                }`}
              >
                <span className="font-display tabular-nums opacity-60">
                  {String(post.series.number).padStart(2, '0')}
                </span>
                <span>{post.shortTitle}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
