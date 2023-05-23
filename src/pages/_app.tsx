import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { TranslationProvider } from '../core/hooks/useTranslate';
import '../styles/globals.css';

import { Open_Sans, Sora } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-openSans'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sora'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} ${sora.variable}`}>
      <TranslationProvider>
        <IconContext.Provider value={{ color: '#121212', size: '24px' }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </TranslationProvider>
    </main>
  );
}

export default MyApp;
