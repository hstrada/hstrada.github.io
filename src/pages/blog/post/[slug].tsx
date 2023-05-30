import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import TPost from 'interfaces/post';
import PostHeader from 'components/blog/post/post-header';
import Head from 'next/head';
import PostBody from 'components/blog/post/post-body';
import markdownToHtml from 'lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { BlogSpan } from 'components/blog/blog-span';

type Props = {
  post: TPost;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `blog | ${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <article className="mb-32">
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <div className="max-w-3xl mx-auto px-6 flex flex-col">
        <BlogSpan />
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </div>
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage'
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
