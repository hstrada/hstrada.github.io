import styles from './styles.module.css'

export const EducationalItem = () => {
  return (
    <div
      className={
        styles.educational +
        ' flex flex-col col-span-4 bg-neutral-900 py-4 pl-4 pr-8 rounded'
      }
    >
      <span className="text-gray-100 font-light text-xs font-display pb-4">
        MBA
      </span>
      <h3 className="text-gray-100 text-base font-display font-bold pb-4">
        Desenvolvimento de Aplicações Java - SOA e Internet das Coisas
      </h3>
      <span className="text-gray-100 font-light text-xs font-display pb-4">
        FIAP [2016-2017]
      </span>
    </div>
  )
}
