import styles from './WorkExperience.module.css';
import { SectionLabel } from '@/components/Shared/SectionLabel';
import { useState } from 'react';

const works = [
  {
    company: 'Creditas',
    jobTitle: 'Engenheiro de Software',
    years: 'Jan/2020 - Atual',
  },
  {
    company: 'Senai',
    jobTitle: 'Instrutor de Formação Profissional',
    years: 'Set/2017 - Jan/2020',
  },
  {
    company: 'MesclaLab',
    jobTitle: 'Desenvolvedor Backend/Frontend',
    years: 'Jun/2016 - Ago/2018',
  },
];

export const WorkExperience = () => {
  const [work, setWork] = useState<number>(0);

  return (
    <section id="workExperience">
      <SectionLabel number="02." text="Onde eu tenho trabalhado?" />
      <div className={styles.container}>
        <div className={styles.workList}>
          <ul>
            {works.map((item, index) => {
              const isCurrentIndex = work === index;
              return (
                <li
                  style={{
                    listStyleImage: isCurrentIndex
                      ? `url('/assets/icons/play.svg')`
                      : `url('/assets/icons/play-white.svg')`,
                    color: !isCurrentIndex && '#474747',
                  }}
                  key={index}
                  onClick={() => setWork(index)}
                >
                  {item.company}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.workItem}>
          <p>{works[work].jobTitle}</p>
          <p>{works[work].years}</p>
        </div>
      </div>
    </section>
  );
};
