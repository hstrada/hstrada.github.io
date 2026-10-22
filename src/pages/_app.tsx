import type { AppProps } from 'next/app';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { TranslationProvider } from '../core/hooks/useTranslate';
import '../styles/globals.css';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk'
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-plex'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${grotesk.variable} ${plex.variable} font-sans`}>
      <TranslationProvider>
        <Component {...pageProps} />
        <Analytics />
      </TranslationProvider>
    </div>
  );
}

export default MyApp;
