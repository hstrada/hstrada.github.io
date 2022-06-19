import { ReactNode } from 'react'

type TSectionDivProps = {
  children: ReactNode
  title: string
}

export const SectionDiv = ({ children, title }: TSectionDivProps) => {
  return (
    <div className="max-w-screen-lg flex flex-col mx-auto">
      <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
        {title}
      </h2>
      {children}
    </div>
  )
}
