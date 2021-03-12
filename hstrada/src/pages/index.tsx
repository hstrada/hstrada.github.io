import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { Menu } from '../components/Menu';

export default function Home() {

  const changeMe = () => {
    if (document.body !== undefined) 
      document.body.style.setProperty('--primary', 'blue');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>hstrada</title>
      </Head>
      <header>
        <Menu />
      </header>

      <main>
        <h1 onClick={changeMe}>
          Hello
        </h1>
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