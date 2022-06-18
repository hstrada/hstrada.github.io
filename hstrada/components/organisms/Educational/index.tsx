import { t } from '../../../core/utils/translate'
import { EducationalItem } from '../../molecules/EducationalItem'

export const Educational = () => {
  const out = Array.from(Array(3), (_, x) => x)
  return (
    <section className="px-6 mt-28">
      <div className="max-w-screen-lg flex flex-col mx-auto">
        <h2 className="text-5xl leading-tight font-bold max-w-screen-lg font-sans">
          {t('educational.title')}
        </h2>
        <div className="pt-16 grid grid-cols-12 gap-12">
          {out.map((index) => (
            <EducationalItem
              level={t(`educational.xp.${index}.level`)}
              title={t(`educational.xp.${index}.title`)}
              place={t(`educational.xp.${index}.place`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
