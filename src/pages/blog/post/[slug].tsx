import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Link from 'next/link';
import TPost from 'interfaces/post';
import PostHeader from 'components/blog/post/post-header';
import Head from 'next/head';
import PostBody from 'components/blog/post/post-body';
import markdownToHtml from 'lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { Translate } from '../../../core/utils/translate';

type Props = {
  post: TPost;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `${post.title} — Helena Strada`;
  const back = Translate('blog.back');

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 md:pt-16">
          <Link
            href="/blog"
            className="text-sm text-ink-600 transition-colors hover:text-ink"
          >
            ← {back}
          </Link>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            categories={post.categories}
          />
          <PostBody content={post.content} />
          <div className="mt-16 border-t border-paper-300 pt-8">
            <Link href="/blog" className="link-underline text-sm font-medium">
              ← {back}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
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
    'coverImage',
    'categories'
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
