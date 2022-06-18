import { TButtonSolidProps } from '../interface'

const Outline = ({ children }: TButtonSolidProps) => {
  return (
    <button className="base-button" role="button">
      {children}
    </button>
  )
}

export default Outline
