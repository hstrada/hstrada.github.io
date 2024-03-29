import { FaInfo } from 'react-icons/fa';
import { Translate } from '../../../core/utils/translate';
import { EducationalItem } from '../../molecules/EducationalItem';
import styles from './styles.module.css';

export const Educational = () => {
  const out = Array.from(Array(3), (_, x) => x);
  return (
    <section className="px-6 mt-48">
      <div className="max-w-screen-lg flex flex-col mx-auto">
        <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
          {Translate('educational.title')}{' '}
          <span className={styles.tooltip}>
            <FaInfo color="#F5F5F5" />
            <span className={styles.text}>
              <p className="font-display font-light text-gray-500 text-xs">
                {Translate('educational.tooltip')}
              </p>
            </span>
          </span>
        </h2>
        <div className="pt-16 grid grid-cols-12 gap-12">
          {out.map((index) => (
            <EducationalItem
              key={index}
              level={Translate(`educational.xp.${index}.level`)}
              title={Translate(`educational.xp.${index}.title`)}
              place={Translate(`educational.xp.${index}.place`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
