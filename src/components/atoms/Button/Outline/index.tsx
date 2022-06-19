import Link from 'next/link'
import { TButtonSolidProps } from '../interface'

const Outline = ({ children, url }: TButtonSolidProps) => {
  return (
    <Link href={url}>
      <button className="base-button" role="button">
        {children}
      </button>
    </Link>
  )
}

export default Outline
