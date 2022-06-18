import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Outline } from '../components/atoms/Button/Outline'
import { Solid } from '../components/atoms/Button/Solid'
import {
  FaGithub,
  FaBehance,
  FaMediumM,
  FaLinkedinIn,
  FaGlobeAmericas,
  FaBars,
} from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hstrada</title>
        <meta name="description" content="hstrada backend software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="px-6 pt-6 flex flex-row justify-between">
        <Image
          src="/hs.png"
          alt="Helena Strada Profile Logo"
          width={23}
          height={36}
        />
        <div className="flex flex-row space-x-4">
          <a>
            <FaGlobeAmericas />
          </a>
          <a>
            <FaBars />
          </a>
        </div>
      </header>

      <main>
        <section className="h-screen px-6">
          <div className="max-w-screen-lg h-full flex justify-center items-start flex-col mx-auto">
            <span className="text-gray-700 text-xl pb-4 font-light font-sans">
              Helena Strada
            </span>
            <h1 className="text-8xl font-bold max-w-screen-lg font-sans">
              Software Engineer <br /> @ BackEnd
            </h1>
            <p className="pt-12 max-w-screen-sm text-gray-700 text-base font-light font-display leading-[2]">
              Atuo como engenheira de software e sou apaixonada por livros e
              tecnologia. Principais interesses em arquitetura de software,
              código limpo e sempre estou buscando algo para aprimorar e/ou
              aprender.
            </p>
            <div className="pt-8 space-x-4">
              <Solid>
                <FaGithub />
              </Solid>
              <Outline>
                <FaLinkedinIn />
              </Outline>
              <Outline>
                <FaBehance />
              </Outline>
              <Outline>
                <FaMediumM />
              </Outline>
            </div>
          </div>
        </section>
      </main>

      <footer>Todos os direitos reservados.</footer>
    </div>
  )
}

export default Home
