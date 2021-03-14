import styles from './OpenSourceCard.module.css';

export const OpenSourceCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOverlay} />
      <img src="/assets/imgs/open-readit.png" alt="readit readme generator" />
      <div className={styles.text}>Teste</div>
    </div>
  );
};
