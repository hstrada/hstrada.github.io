import { SectionDiv } from 'components/atoms/SectionDiv'
import { t } from '../../../core/utils/translate'

const posts = [
  {
    title: 'Criando workflows reutilizáveis com GitHub Actions',
    year: 2022,
  },
  {
    title: 'Mantendo suas dependências atualizadas com o Dependabot',
    year: 2022,
  },
  {
    title: 'Alterando a cor do tema no React Native',
    year: 2021,
  },
  {
    title: 'Escolhendo o simulador iOS',
    year: 2020,
  },
  {
    title: 'Resume',
    year: 2020,
  },
]

export const Blog = () => {
  return (
    <section className="px-6 mt-48">
      <SectionDiv title={t('blog.title')}>
        <div className="pt-16">
          {posts.map((index) => (
            <div key={index.title} className="relative flex py-2 items-center">
              <span className="flex-shrink mr-12 font-display font-light leading-6 text-gray-700 text-sm">
                {index.title}
              </span>
              <div className="flex-grow border-b pt-2 border-dotted border-gray-400"></div>
              <span className="flex-shrink ml-12 font-display font-light leading-6 text-gray-700 text-sm">
                {index.year}
              </span>
            </div>
          ))}
        </div>
      </SectionDiv>
    </section>
  )
}
