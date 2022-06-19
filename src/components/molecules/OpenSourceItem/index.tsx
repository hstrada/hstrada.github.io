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
      <p className="font-display pb-8 h-16 sm:h-32 md:h-32 lg:h-24 font-light text-gray-700 text-sm">
        {description}
      </p>

      <Button.Solid>{button}</Button.Solid>
    </div>
  )
}
