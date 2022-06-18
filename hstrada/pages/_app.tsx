import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'
import { TranslationProvider } from '../core/hooks/useTranslate'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <IconContext.Provider value={{ color: '#121212', size: '24px' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </TranslationProvider>
  )
}

export default MyApp
