import Button from '../../atoms/Button'

type TOpenSourceItemProps = {
  description: string
  button: string
}

export const OpenSourceItem = ({ description, button }: TOpenSourceItemProps): JSX.Element => {
  return (
    <div>
      <img />
      <p className="font-display font-light text-gray-700 text-sm pb-4">
        {description}
      </p>

      <Button.Solid>{button}</Button.Solid>
    </div>
  )
}
