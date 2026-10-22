import { PostSeries } from 'lib/api';

type Props = {
  series: PostSeries;
  className?: string;
};

export const SeriesBadge = ({ series, className = '' }: Props) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-yellow-500 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-ink ${className}`}
    >
      {series.key}
      <span className="opacity-50">/</span>
      {String(series.number).padStart(2, '0')}
    </span>
  );
};
