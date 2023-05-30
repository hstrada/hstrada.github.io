import type { AppProps } from 'next/app';
import { Sora, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { IconContext } from 'react-icons';

import { TranslationProvider } from '../core/hooks/useTranslate';
import '../styles/globals.css';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sora'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${sora.variable}`}>
      <TranslationProvider>
        <IconContext.Provider value={{ color: '#121212', size: '24px' }}>
          <Component {...pageProps} />
          <Analytics />
        </IconContext.Provider>
      </TranslationProvider>
    </main>
  );
}

export default MyApp;
