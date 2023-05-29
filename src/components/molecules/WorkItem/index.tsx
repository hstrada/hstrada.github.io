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
      <span className="w-1/5 lg:w-1/6 text-gray-500 text-sm font-light font-sans leading-[2] pt-2">
        {date}
      </span>
      <div className={styles.work + ' w-4/5 h-24 bg-gray-300 lg:w-3/5 rounded-md'}>
        <h3 className="pt-4 px-4 font-sans font-bold text-lg text-gray-700">
          {title}
        </h3>
        <p className="px-4 pt-1 font-display font-light text-sm text-gray-500">
          {company}
        </p>
      </div>
    </div>
  )
}
