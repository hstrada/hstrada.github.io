import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { Menu } from '../components/Menu';
import { SectionLabel } from '../components/SectionLabel';

export default function Home() {
  const changeMe = () => {
    if (document.body !== undefined)
      document.body.style.setProperty('--primary', 'blue');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>hstrada</title>
      </Head>
      <header>
        <Menu />
      </header>

      <main>
        <section className={styles.profile}>
          <SectionLabel number="01." text="Olá, eu sou a" />
          <h1 className={styles.title}>Helena Strada</h1>
          <p className={styles.description}>
            e atuo como engenheira de software e sou apaixonada por livros e
            tecnologia - principalmente, os dois juntos. Principais interesses
            em arquitetura de software, código limpo e sempre estou buscando
            algo para aprimorar e/ou aprender.
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
      </main>

      <footer>
        <a
          href="http://github.com/hstrada"
          target="_blank"
          rel="noopener noreferrer"
        >
          hstrada
        </a>
      </footer>
    </div>
  );
}
