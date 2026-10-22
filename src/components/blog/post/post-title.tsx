import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
      {children}
    </h1>
  )
}

export default PostTitle
