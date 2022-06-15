import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <header>Adicionar header</header>
      <main>
        <section className="h-screen px-6">
          <div className="max-w-screen-lg h-full flex justify-center items-start flex-col mx-auto">
            <span className="text-gray-700 text-xl pb-4 font-light font-epilogue">Helena Strada</span>
            <h1 className="text-8xl font-bold font-sora max-w-screen-lg">
              Software Engineer <br /> @ BackEnd
            </h1>
            <p className="pt-4 max-w-screen-sm text-gray-700 text-base font-light font-epilogue leading-[1.75]">
              Atuo como engenheira de software e sou apaixonada por livros e
              tecnologia. Principais interesses em arquitetura de software,
              código limpo e sempre estou buscando algo para aprimorar e/ou
              aprender.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>yey</p>
      </footer>
    </>
  );
};

export default Home;
