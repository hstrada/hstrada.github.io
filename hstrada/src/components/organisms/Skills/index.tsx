import { useState } from 'react'
import { t } from '../../../core/utils/translate'
import { SectionDiv } from '../../atoms/SectionDiv'
import styles from './styles.module.css'

const backend = [
  'Java, Spring Boot, Spring MVC, Spring Security, Hibernate;',
  'C#, .NET Core, EF Core;',
  'API, REST, GraphQL, CQRS;',
  'SQL Server, MySQL, MongoDB.',
]

const frontend = [
  'HTML5, CSS3',
  'ReactJs / React Native',
  'Global State (Redux / Context)',
  'Styled-Components',
  'ES6',
  'Testes (Jest / Enzyme / React Testing Library)',
  'Typescript',
]

const skills = {
  backend: backend.map((value) => `<div>${value}</div>`).join(''),
  frontend: frontend.map((value) => `<div>${value}</div>`).join(''),
}

export const Skills = () => {
  const liStyle =
    styles.skills +
    ' bg-gray-300 rounded w-3/4 text-center p-2 text-lg font-sans hover:bg-slate-200 duration-300'

  const [details, setDetails] = useState(skills['backend'])

  const handleSelectSkill = (event) => {
    setDetails(skills[event.target.accessKey])
  }

  return (
    <section className="px-6 mt-28">
      <SectionDiv title={t('skills.title')}>
        <div className="grid grid-cols-12 gap-4 pt-16">
          <div className="col-span-3">
            <ul className="list-none space-y-4">
              <li
                accessKey="backend"
                key="backend"
                onClick={handleSelectSkill}
                className={liStyle}
              >
                BackEnd
              </li>
              <li
                accessKey="frontend"
                key="frontend"
                onClick={handleSelectSkill}
                className={liStyle}
              >
                FrontEnd
              </li>
            </ul>
          </div>
          <div
            className="col-span-6 font-display font-light leading-6 text-gray-700 text-sm"
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
        </div>
      </SectionDiv>
    </section>
  )
}
