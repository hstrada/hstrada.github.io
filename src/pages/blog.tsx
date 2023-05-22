import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>blog | hstrada</title>
      </Head>
      <section className="px-6">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="flex flex-row justify-between content-center items-center">
            <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
              Blog<span>.</span>
            </h2>
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
                <div className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 mr-2">
                  BackEnd
                </div>
                <div className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600">
                  CI/CD
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl leading-tight font-bold max-w-screen-lg font-sans">
                Mantendo suas dependências atualizadas com o Dependabot
              </h2>
              <p className="mt-2 font-sans font-light leading-6 text-gray-600 text-sm">
                Deixar as dependências sempre atualizadas é um dos pontos mais
                importantes quando falamos em manter um projeto. A vantagem de
                nos preocuparmos é que garantimos segurança, disponibilidade de
                novos recursos/funcionalidades e até mesmo uma melhor
                performance em nosso código.
              </p>
              <div className="flex flex-row mt-2">
                <div className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 mr-2">
                  GitHub
                </div>
                <div className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600">
                  Dependabot
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
