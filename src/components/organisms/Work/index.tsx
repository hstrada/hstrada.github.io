import { Translate } from '../../../core/utils/translate';
import { Section } from '../../atoms/Section';

type TTrack = 'engineering' | 'teaching';

const tracks: TTrack[] = [
  'engineering',
  'engineering',
  'teaching',
  'teaching',
  'teaching',
  'engineering'
];

const trackStyle: Record<TTrack, string> = {
  engineering: 'bg-ink text-paper',
  teaching: 'bg-yellow-500 text-ink'
};

export const WorkExperience = () => {
  return (
    <Section
      id="trajetoria"
      eyebrow={Translate('work.eyebrow')}
      title={Translate('work.title')}
    >
      <ol className="divide-y divide-paper-300 border-y border-paper-300">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="group grid grid-cols-12 items-center gap-x-4 gap-y-1 py-5 transition-colors md:py-6"
          >
            <span className="col-span-12 font-display text-sm tabular-nums text-ink-400 md:col-span-3">
              {Translate(`work.jobs.${index}.date`)}
            </span>
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-display text-lg font-semibold leading-snug transition-transform group-hover:translate-x-1 md:text-xl">
                {Translate(`work.jobs.${index}.title`)}
              </h3>
              <p className="text-sm text-ink-600">
                {Translate(`work.jobs.${index}.company`)}
              </p>
            </div>
            <div className="col-span-12 mt-2 md:col-span-3 md:mt-0 md:text-right">
              <span
                className={`inline-block rounded-full px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider ${trackStyle[track]}`}
              >
                {Translate(`work.${track}`)}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};
