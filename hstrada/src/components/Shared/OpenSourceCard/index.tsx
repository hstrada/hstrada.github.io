import React from 'react';
import styles from './OpenSourceCard.module.css';

const OpenSourceCard = ({
  imageName,
  projectName,
  projectUrl,
}: {
  imageName: string;
  projectName: string;
  projectUrl: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOverlay} />
      <img
        src={`/assets/imgs/${imageName}.png`}
        alt="readit readme generator"
      />
      <div className={styles.text}>
        <p>{projectName}</p>
        <p>{projectUrl}</p>
      </div>
    </div>
  );
};

export const MemoizeOpenSourceCard = React.memo(OpenSourceCard);