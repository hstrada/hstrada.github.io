import Button from '../../atoms/Button'

export const OpenSource = () => {
  return (
    <section className="px-6 mt-28">
      <div className="max-w-screen-lg flex flex-col mx-auto">
        <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
          Open Source
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-16">
          <div>
            <img />
            <p className="font-display font-light text-gray-700 text-sm pb-4">
              O readit-readme é um projeto focado em criar e gerar readme’s para
              os seus projetos de forma pragmática e interativa.
            </p>

            <Button.Solid>readit-readme</Button.Solid>
          </div>
          <div>
            <img />
            <p className="font-display font-light text-gray-700 text-sm pb-4">
              purê-css é um projeto para auxiliar os desenvolvedores a criarem
              visualmente as bordas css.
            </p>
            <Button.Solid>purê-css</Button.Solid>
          </div>
        </div>
      </div>
    </section>
  )
}
