import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/organisms/Header'

import { Hero } from '../components/organisms/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hstrada</title>
        <meta name="description" content="hstrada backend software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>

      <footer>Todos os direitos reservados.</footer>
    </div>
  )
}

export default Home
