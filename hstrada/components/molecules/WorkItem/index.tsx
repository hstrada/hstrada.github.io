import styles from './style.module.css'

type TWorkItemProps = {
  date: string
  job: {
    title: string
    company: string
  }
}

export const WorkItem = ({ date, job: { title, company } }: TWorkItemProps) => {
  return (
    <div className="flex flex-row">
      <span className="w-1/6 text-gray-500 text-base font-light font-sans leading-[2] pt-2">
        {date}
      </span>
      <div className={styles.work + ' h-24 bg-gray-300 w-3/5 rounded-md'}>
        <h3 className="pt-4 px-4 font-sans font-bold text-lg text-gray-700">
          {title}
        </h3>
        <p className="px-4 pt-1 font-display font-light text-gray-500">
          {company}
        </p>
      </div>
    </div>
  )
}
