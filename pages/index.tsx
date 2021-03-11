import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hstrada</title>
      </Head>
      <header>
        
      </header>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
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
