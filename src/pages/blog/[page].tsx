import { GetStaticPathsResult } from 'next';
import Head from 'next/head';

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
import { Categories } from 'components/blog/categories';

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
          <Categories categories={allCategories} />

          <Posts posts={posts} />

          <Pagination numberOfPages={numberOfPages} />
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
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
