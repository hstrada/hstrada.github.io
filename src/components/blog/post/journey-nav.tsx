import Link from 'next/link';
import { Journey } from 'lib/api';
import { Translate } from '../../../core/utils/translate';

type Props = {
  journey: Journey;
  currentSlug: string;
};

export const JourneyNav = ({ journey, currentSlug }: Props) => {
  return (
    <nav aria-label={Translate('blog.in_journey')}>
      <p className="eyebrow">{Translate('blog.in_journey')}</p>
      <Link
        href={`/blog/jornada/${journey.slug}`}
        className="mt-2 block font-display text-lg font-semibold leading-snug hover:underline"
      >
        {journey.name}
      </Link>
      <ol className="mt-4 space-y-1">
        {journey.lessons.map((post, index) => {
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
                  {String(index + 1).padStart(2, '0')}
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
