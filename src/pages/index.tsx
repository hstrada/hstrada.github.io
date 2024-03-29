import { Blog } from 'components/organisms/Blog'
import { Footer } from 'components/organisms/Footer'
import { Skills } from 'components/organisms/Skills'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Educational } from '../components/organisms/Educational'
import { Header } from '../components/organisms/Header'

import { Hero } from '../components/organisms/Hero'
import { OpenSource } from '../components/organisms/OpenSource'
import { WorkExperience } from '../components/organisms/Work'

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
        <WorkExperience />
        <Educational />
        <OpenSource />
        <Skills />
        <Blog />
      </main>

      <Footer />
    </div>
  )
}

export default Home
