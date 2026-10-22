import type { NextPage } from 'next';
import Head from 'next/head';

import TPost from 'interfaces/post';
import { getAllPosts, getSeries, Series } from 'lib/api';

import { Header } from 'components/organisms/Header';
import { Hero } from 'components/organisms/Hero';
import { WorkExperience } from 'components/organisms/Work';
import { Writing } from 'components/organisms/Writing';
import { Stack } from 'components/organisms/Stack';
import { Footer } from 'components/organisms/Footer';

type Props = {
  series: Series[];
  latest: TPost[];
};

const Home: NextPage<Props> = ({ series, latest }) => {
  return (
    <>
      <Head>
        <title>Helena Strada — Software Engineer</title>
        <meta
          name="description"
          content="Helena Strada, engenheira de software backend. Kotlin, Java e C# em fintech, e séries para aprender backend do zero."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <WorkExperience />
        <Writing series={series} latest={latest} />
        <Stack />
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'categories']);

  return {
    props: {
      series: getSeries(allPosts),
      latest: allPosts.slice(0, 5)
    }
  };
};

export default Home;
