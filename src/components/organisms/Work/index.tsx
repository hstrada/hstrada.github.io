import { Translate } from '../../../core/utils/translate'
import { SectionDiv } from '../../atoms/SectionDiv'
import { WorkItem } from '../../molecules/WorkItem'

export const WorkExperience = () => {
  const out = Array.from(Array(5), (_, x) => x)
  return (
    <section className="px-6">
      <SectionDiv title={Translate('work.title')}>
        <div className="pt-16 space-y-5">
          {out.map((index) => {
            return (
              <WorkItem
                key={index}
                date={Translate(`work.jobs.${index}.date`)}
                job={{
                  title: Translate(`work.jobs.${index}.job.title`),
                  company: Translate(`work.jobs.${index}.job.company`),
                }}
              />
            )
          })}
        </div>
      </SectionDiv>
    </section>
  )
}
