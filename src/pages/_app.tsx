import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { TranslationProvider } from '../core/hooks/useTranslate';
import '../styles/globals.css';

import { Oxygen, Sora } from 'next/font/google';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sora'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oxygen.variable} ${sora.variable}`}>
      <TranslationProvider>
        <IconContext.Provider value={{ color: '#121212', size: '24px' }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </TranslationProvider>
    </main>
  );
}

export default MyApp;
