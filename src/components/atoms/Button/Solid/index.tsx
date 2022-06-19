import Link from 'next/link'
import { TButtonSolidProps } from '../interface'
import styles from './solid.module.css'

const Solid = ({ children, url }: TButtonSolidProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <button className={`${styles.button} base-button`} role="button">
        {children}
      </button>
    </Link>
  )
}

export default Solid
