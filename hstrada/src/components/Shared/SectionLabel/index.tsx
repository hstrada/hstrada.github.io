import styles from './SectionLabel.module.css';

interface ISectionLabelProps {
  number: string;
  text: string;
}

export const SectionLabel = ({ number, text }: ISectionLabelProps) => {
  return (
    <p className={styles.text}>
      <span>{number}</span>
      {text}
    </p>
  );
};
