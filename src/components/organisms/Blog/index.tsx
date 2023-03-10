import { SectionDiv } from 'components/atoms/SectionDiv'
import { t } from '../../../core/utils/translate'

const posts = [
  {
    title: 'Criando workflows reutilizáveis com GitHub Actions',
    year: 2022,
    url: 'https://balta.io/blog/criando-workflows-reutilizaveis-github-actions'
  },
  {
    title: 'Mantendo suas dependências atualizadas com o Dependabot',
    year: 2022,
    url: 'https://hstrada.medium.com/mantendo-suas-dependências-atualizadas-com-o-dependabot-ac6003c25881'
  },
  {
    title: 'Alterando a cor do tema no React Native',
    year: 2021,
    url: 'https://balta.io/blog/react-native-color-scheme'
  },
  {
    title: 'Escolhendo o simulador iOS',
    year: 2020,
    url: 'https://medium.com/creditas-tech/escolhendo-o-simulador-ios-cddf9ded03bb'
  },
  {
    title: 'Desmistificando o JOIN',
    year: 2019,
    url: 'https://hstrada.medium.com/desmistificando-o-join-becaba5ad0a6'
  },
]

export const Blog = () => {
  return (
    <section className="px-6 mt-48">
      <SectionDiv title={t('blog.title')}>
        <div className="pt-16">
          {posts.map((index) => (
            <div key={index.title} className="relative flex py-2 items-center">
              <span className="flex-shrink truncate mr-12 font-display font-light leading-6 text-gray-700 text-sm">
                <a href={index.url}>{index.title}</a>
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
