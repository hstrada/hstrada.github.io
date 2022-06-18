import { t } from '../../../core/utils/translate'
import { WorkItem } from '../../molecules/WorkItem'

export const WorkExperience = () => {
  let out = Array.from(Array(5), (_,x) => x);
  return (
    <section className="px-6">
      <div className="max-w-screen-lg flex flex-col mx-auto">
        <h2 className="text-5xl leading-tight font-bold max-w-screen-lg font-sans">
          {t('work.title')}
        </h2>
        <div className="pt-16 space-y-5">
          {out.map((index) => {
            return (
              <WorkItem
                date={t(`work.jobs.${index}.date`)}
                job={{
                  title: t(`work.jobs.${index}.job.title`),
                  company: t(`work.jobs.${index}.job.company`),
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
