import styles from './OpenSource.module.css';
import { SectionLabel } from '@/components/Shared/SectionLabel';
import { OpenSourceCard } from '@/components/Shared/OpenSourceCard';

export const OpenSource = () => {
  return (
    <section id="openSource">
      <div className={styles.container}>
        <SectionLabel number="03." text="O que eu tenho criado?" />
        <div className={styles.openSourceProjects}>
          <OpenSourceCard />
          <OpenSourceCard />
        </div>
      </div>
    </section>
  );
};
