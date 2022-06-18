import { TButtonSolidProps } from '../interface'

export const Outline = ({ children }: TButtonSolidProps) => {
  return (
    <button className="base-button" role="button">
      {children}
    </button>
  )
}
