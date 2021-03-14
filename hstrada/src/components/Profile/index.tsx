import styles from './Profile.module.css';

import { SectionLabel } from '@/components/Shared/SectionLabel';

export const Profile = () => {
  return (
    <section id="profile" className={styles.profile}>
      <SectionLabel number="01." text="Olá, eu sou a" />
      <h1 className={styles.title}>Helena Strada</h1>
      <p className={styles.description}>
        e atuo como engenheira de software e sou apaixonada por livros e
        tecnologia - principalmente, os dois juntos. Principais interesses em
        arquitetura de software, código limpo e sempre estou buscando algo para
        aprimorar e/ou aprender.
      </p>
      <p className={styles.highlight}>
        Acredito que a <span>dedicação</span> seja transformação.
      </p>
      <div className={styles.icons}>
        <img src="/assets/icons/github.svg" />
        <img src="/assets/icons/arrow.svg" />
        <img src="/assets/icons/in.svg" />
        <img src="/assets/icons/arrow.svg" />
      </div>
    </section>
  );
};
