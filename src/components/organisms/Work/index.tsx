import { t } from '../../../core/utils/translate'
import { SectionDiv } from '../../atoms/SectionDiv'
import { WorkItem } from '../../molecules/WorkItem'

export const WorkExperience = () => {
  const out = Array.from(Array(5), (_, x) => x)
  return (
    <section className="px-6">
      <SectionDiv title={t('work.title')}>
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
      </SectionDiv>
    </section>
  )
}
