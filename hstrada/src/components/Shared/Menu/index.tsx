import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <hr className={styles.line} />
        <img src="/assets/icons/globe.svg" />
      </div>
      <div className={styles.toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="#profile">
              <span>01.</span>Perfil
            </a>
          </li>
          <li>
            <a href="#workExperience">
              <span>02.</span>Experiência
            </a>
          </li>
          <li>
            <a href="#">
              <span>03.</span>Open Source
            </a>
          </li>
          <li>
            <a href="#">
              <span>04.</span>Tecnologias
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
