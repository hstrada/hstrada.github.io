import { GetStaticPathsResult } from 'next';
import Head from 'next/head';

import { getAllPosts, getTotalPosts, renderPostsByPage } from 'lib/api';

import Post from '../../interfaces/post';

import { Pagination } from 'components/blog/pagination';
import { Posts } from 'components/blog/posts';
import { BlogHeader } from 'components/blog/blog-header';
import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';

type Props = {
  posts: Post[];
  allCategories: string[];
  numberOfPages: number;
};

export default function Blog({ posts, numberOfPages }: Props) {
  return (
    <>
      <Head>
        <title>Blog — Helena Strada</title>
      </Head>
      <Header />
      <main>
        <BlogHeader />
        <section className="container-site pb-24">
          <Posts posts={posts} />
          <Pagination numberOfPages={numberOfPages} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // Get total number of posts from md resources.
  const totalPosts = await getTotalPosts();
  const numberOfPages = Math.ceil(totalPosts / 10);

  // Build paths `blog/1`, `blog/2` ...etc.
  const paths = Array(numberOfPages)
    .fill(0)
    .map((_, page) => ({
      params: {
        page: `${page + 1}`
      }
    }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'categories'
  ]);

  const numberOfPostsPerPage = 10;

  const numberOfPages = Math.ceil(allPosts.length / numberOfPostsPerPage);

  const posts = renderPostsByPage(allPosts, params.page);

  return {
    props: { posts, numberOfPages }
  };
};
