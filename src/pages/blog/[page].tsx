import { GetStaticPathsResult } from 'next';
import Head from 'next/head';

import { getAllPosts, getTotalPosts, renderPostsByPage } from 'lib/api';

import Post from '../../interfaces/post';

import { Pagination } from 'components/blog/pagination';
import { Posts } from 'components/blog/posts';
import { BlogHeader } from 'components/blog/blog-header';
import { BlogSpan } from 'components/blog/blog-span';

type Props = {
  posts: Post[];
  allCategories: string[];
  numberOfPages: number;
};

export default function Blog({ posts, numberOfPages }: Props) {
  return (
    <>
      <Head>
        <title>blog | hstrada</title>
      </Head>
      <BlogHeader />
      <section className="px-6 pb-12">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <BlogSpan />
          {/* <Categories categories={allCategories} /> */}

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

  // const allCategories = getAllCategories(allPosts);

  return {
    props: { posts, numberOfPages }
  };
};
