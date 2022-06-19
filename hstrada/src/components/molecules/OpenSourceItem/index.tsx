import Button from '../../atoms/Button'

type TOpenSourceItemProps = {
  description: string
  button: string
}

export const OpenSourceItem = ({ description, button }: TOpenSourceItemProps): JSX.Element => {
  return (
    <div>
      <p className="font-display pb-4 md:h-20 font-light text-gray-700 text-sm">
        {description}
      </p>

      <Button.Solid>{button}</Button.Solid>
    </div>
  )
}
