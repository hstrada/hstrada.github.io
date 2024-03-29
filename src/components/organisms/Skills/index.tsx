import { useState } from 'react';
import { Translate } from '../../../core/utils/translate';
import { SectionDiv } from '../../atoms/SectionDiv';
import styles from './styles.module.css';

const backend = [
  '- Java, Kotlin, Spring Framework, Hibernate;',
  '- C#, .NET Core, EF Core;',
  '- API, REST, GraphQL, CQRS;',
  '- Clean Code, Clean Architecture, Design Patterns;',
  '- SQL Server, MySQL, Redis;',
  '- Monolith, Microservices.'
];

const frontend = [
  '- HTML5, CSS3;',
  '- ReactJs, NextJS / React Native;',
  '- Global State (Redux / Context);',
  '- Styled-Components;',
  '- ES6;',
  '- Testes (Jest / Enzyme / React Testing Library);',
  '- Typescript.'
];

const tools = [
  '- Git + GitHub;',
  '- GitHub Packages;',
  '- CI/CD (CircleCI, GitHub Actions).'
];

const buildSkills = (skills: string[]) =>
  skills.map((value) => `<div>${value}</div>`).join('');

const skills = {
  backend: buildSkills(backend),
  frontend: buildSkills(frontend),
  tools: buildSkills(tools)
};

const listStyle =
  styles.skills +
  ' bg-gray-300 rounded w-3/4 text-center p-2 py-4 text-lg font-sans hover:bg-neutral-200 duration-300';

export const Skills = () => {
  const [details, setDetails] = useState(skills['backend']);
  const [selectedSkill, setSelectedSkill] = useState('backend');

  const liStyle = (skill: string) => {
    if (skill === selectedSkill) return listStyle.concat(' font-bold');
    return listStyle;
  };

  const handleSelectSkill = (event) => {
    const skill = event.target.accessKey;
    setDetails(skills[skill]);
    setSelectedSkill(skill);
  };

  return (
    <section className="px-6 mt-48">
      <SectionDiv title={Translate('skills.title')}>
        <div className="grid grid-cols-12 gap-4 pt-16">
          <div className="col-span-5 sm:col-span-3">
            <ul className="list-none space-y-4">
              {Object.keys(skills).map((value) => (
                <li
                  accessKey={value}
                  key={value}
                  onClick={handleSelectSkill}
                  className={liStyle(value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-span-6 font-display space-y-2 font-light leading-6 text-gray-700 text-sm"
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
        </div>
      </SectionDiv>
    </section>
  );
};
