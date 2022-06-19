import Button from '../../atoms/Button'

type TOpenSourceItemProps = {
  description: string
  button: string
}

export const OpenSourceItem = ({
  description,
  button,
}: TOpenSourceItemProps): JSX.Element => {
  return (
    <div>
      <p className="font-display pb-4 h-12 sm:h-24 md:h-24 font-light text-gray-700 text-sm">
        {description}
      </p>

      <Button.Solid>{button}</Button.Solid>
    </div>
  )
}
