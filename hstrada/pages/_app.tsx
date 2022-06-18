import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ color: '#121212', size: '24px' }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  )
}

export default MyApp
