import Head from 'next/head';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function Blog() {
  return (
    <>
      <Head>
        <title>blog | hstrada</title>
      </Head>
      <section className="px-6">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="flex flex-row justify-between content-center items-center">
            <h1 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
              Blog<span>.</span>
            </h1>
            <h3>foco, persistência e consistência.</h3>
          </div>

          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl leading-tight font-bold max-w-screen-lg font-sans">
                Criando workflows reutilizáveis com GitHub Actions
              </h2>
              <p className="mt-2 font-sans font-light leading-6 text-gray-600 text-sm">
                O GitHub Actions é uma ferramenta de fluxo de trabalho (ou
                workflow) presente no GitHub que permite a automação de nosso
                fluxo de trabalho. Neste breve artigo, vamos apresentar duas
                maneiras de como criar, reaproveitar e compartilhar fluxos de
                trabalho entre os diferentes repositórios da sua organização.
              </p>
              <div className="flex flex-row mt-2">
                <span className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 mr-2 text-xs flex items-center">
                  BackEnd
                </span>
                <span className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 text-xs flex items-center">
                  CI/CD
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl leading-tight font-bold max-w-screen-lg font-sans ">
                Mantendo suas dependências atualizadas com o Dependabot
              </h2>
              <p className="mt-2 font-sans font-light leading-6 text-gray-600 text-sm flex items-center">
                Deixar as dependências sempre atualizadas é um dos pontos mais
                importantes quando falamos em manter um projeto. A vantagem de
                nos preocuparmos é que garantimos segurança, disponibilidade de
                novos recursos/funcionalidades e até mesmo uma melhor
                performance em nosso código.
              </p>
              <div className="flex flex-row mt-2">
                <span className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 mr-2 text-xs flex items-center">
                  GitHub
                </span>
                <span className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 text-xs flex items-center">
                  Dependabot
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between font-sans">
            <div className="border px-3 py-2 rounded-md flex content-center items-center space-x-2">
              <BsArrowLeft size={16} />
              <p>Anterior</p>
            </div>
            <ul className="flex flex-row space-x-2 items-center">
              <li className="px-3 py-1 rounded-md bg-slate-800 text-slate-100">1</li>
              <li className="border px-3 py-1 rounded-md">2</li>
              <li className="border px-3 py-1 rounded-md">3</li>
              <li className="border px-3 py-1 rounded-md">4</li>
              <li className="border px-3 py-1 rounded-md">5</li>
            </ul>
            <div className="border px-3 py-2 rounded-md flex content-center items-center space-x-2">
              <p>Próxima</p>
              <BsArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
