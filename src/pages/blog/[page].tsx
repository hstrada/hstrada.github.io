import { GetStaticPathsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import {
  getAllCategories,
  getAllPosts,
  getTotalPosts,
  renderPostsByPage
} from 'lib/api';

import Post from '../../interfaces/post';

import { Pagination } from 'components/blog/pagination';
import { Posts } from 'components/blog/posts';
import { PostHeader } from 'components/blog/post-header';

type Props = {
  posts: Post[];
  allCategories: string[];
  numberOfPages: number;
};

export default function Blog({ posts, allCategories, numberOfPages }: Props) {
  return (
    <>
      <Head>
        <title>blog | hstrada</title>
      </Head>
      <PostHeader />
      <section className="px-6">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="mt-32 flex flex-row justify-between content-center items-center">
            <h1 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
              Blog<span>.</span>
            </h1>
          </div>
          <div className="mt-24 mb-8">
            <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
              <li className="mr-2">
                <Link
                  href={{ pathname: '/blog' }}
                  aria-current="page"
                  className="inline-block text-gray-900 rounded-t-lg border-b border-gray-900 py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500"
                >
                  Ver todos
                </Link>
              </li>
              {allCategories.map((category) => (
                <li className="mr-2" key={category}>
                  <Link
                    href={{
                      pathname: '/blog',
                      query: { category }
                    }}
                    className="inline-block text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Posts posts={posts} />

          <Pagination numberOfPages={numberOfPages} />
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // Get total number of posts from md resources.
  const totalPosts = await getTotalPosts();
  const numberOfPages = Math.ceil(totalPosts / 3);

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

  const numberOfPages = Math.ceil(allPosts.length / 3);

  const posts = renderPostsByPage(allPosts, params.page);

  const allCategories = getAllCategories(allPosts);

  return {
    props: { posts, allCategories, numberOfPages }
  };
};
