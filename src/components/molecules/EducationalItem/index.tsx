import styles from './styles.module.css';

type TEducationalItemProps = {
  level: string;
  title: string;
  place: string;
};

export const EducationalItem = ({
  level,
  title,
  place
}: TEducationalItemProps) => {
  return (
    <div
      className={
        styles.educational +
        ' flex flex-col justify-between h-56 col-span-9 sm:col-span-12 md:col-span-4 bg-neutral-900 py-4 pl-4 pr-8 rounded'
      }
      key={level}
    >
      <span className="text-slate-400 font-light text-xs font-display">
        {level}
      </span>
      <h3 className="text-gray-100 text-sm font-display font-bold">{title}</h3>
      <span className="text-slate-400 text-xs font-display">{place}</span>
    </div>
  );
};
