import Image from 'next/image';
import Link from 'next/link';
import { Journey } from 'lib/api';
import { Translate } from '../../core/utils/translate';

const PREVIEW_LESSONS = 3;

export const JourneyCard = ({ journey }: { journey: Journey }) => {
  const preview = journey.lessons.slice(0, PREVIEW_LESSONS);
  const hidden = journey.lessons.length - preview.length;

  return (
    <Link
      href={`/blog/jornada/${journey.slug}`}
      className="group grid h-full overflow-hidden rounded-2xl border border-paper-300 bg-white/60 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-yellow-500)] sm:grid-cols-[11rem_minmax(0,1fr)]"
    >
      <div className="relative aspect-[16/7] overflow-hidden bg-paper-200 sm:aspect-auto">
        <Image
          src={journey.lessons[0].cover}
          alt=""
          fill
          sizes="(min-width: 640px) 11rem, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">
          {journey.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          {journey.description}
        </p>
        <ol className="mt-4 flex-1 space-y-1 text-sm text-ink-600">
          {preview.map((post, index) => (
            <li key={post.slug} className="flex gap-2">
              <span className="font-display tabular-nums text-ink-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="truncate">{post.shortTitle}</span>
            </li>
          ))}
          {hidden > 0 && (
            <li className="pl-7 text-ink-400">
              + {hidden} {Translate('blog.more_lessons')}
            </li>
          )}
        </ol>
        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-ink-400">
          <span>
            {journey.lessons.length} {Translate('blog.lessons')} ·{' '}
            {journey.minutes} {Translate('blog.minutes')}
          </span>
          <span className="shrink-0 font-medium text-ink group-hover:underline">
            {Translate('blog.see_journey')} →
          </span>
        </div>
      </div>
    </Link>
  );
};
