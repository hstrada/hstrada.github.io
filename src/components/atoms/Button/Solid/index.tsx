import { TButtonSolidProps } from '../interface'
import styles from './solid.module.css'

const Solid = ({ children }: TButtonSolidProps) => {
  return (
    <button className={`${styles.button} base-button`} role="button">
      {children}
    </button>
  )
}

export default Solid
