import Head from 'next/head';
import Link from 'next/link';

import {
  getPostBySlug,
  getPostSummaries,
  getSeriesPosts,
  PostSummary
} from 'lib/api';
import markdownToHtml, { Heading, withHeadingIds } from 'lib/markdownToHtml';

import PostHeader from 'components/blog/post/post-header';
import PostBody from 'components/blog/post/post-body';
import { SeriesNav } from 'components/blog/post/series-nav';
import { TableOfContents } from 'components/blog/post/table-of-contents';
import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { Translate } from '../../../core/utils/translate';

type Props = {
  post: PostSummary;
  author: string;
  content: string;
  headings: Heading[];
  seriesPosts: PostSummary[];
};

const Neighbour = ({
  post,
  direction
}: {
  post?: PostSummary;
  direction: 'previous' | 'next';
}) => {
  if (!post) return <div className="hidden sm:block" />;

  const isNext = direction === 'next';
  return (
    <Link
      href={`/blog/post/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-paper-300 p-5 transition-colors hover:border-ink hover:bg-white/60 ${
        isNext ? 'sm:items-end sm:text-right' : ''
      }`}
    >
      <span className="eyebrow">
        {isNext ? `${Translate('blog.next')} →` : `← ${Translate('blog.previous')}`}
      </span>
      <span className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-yellow-600">
        {post.shortTitle}
      </span>
    </Link>
  );
};

export default function Post({
  post,
  author,
  content,
  headings,
  seriesPosts
}: Props) {
  const index = seriesPosts.findIndex((item) => item.slug === post.slug);
  const previous = index > 0 ? seriesPosts[index - 1] : undefined;
  const next = index >= 0 ? seriesPosts[index + 1] : undefined;
  const hasSeries = post.series && seriesPosts.length > 1;

  return (
    <>
      <Head>
        <title>{`${post.shortTitle} — Helena Strada`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.wideCover} />
      </Head>
      <Header wide />

      <main className="mx-auto max-w-[84rem] px-4 pb-24 pt-10 sm:px-6 md:pt-14 lg:px-8">
        <PostHeader post={post} author={author} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6">
              {hasSeries ? (
                <SeriesNav
                  series={post.series}
                  posts={seriesPosts}
                  currentSlug={post.slug}
                />
              ) : (
                <div>
                  <p className="eyebrow">Tags</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <li
                        key={category}
                        className="rounded-full border border-paper-300 px-2.5 py-0.5 text-xs text-ink-600"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <PostBody content={content} />

            {hasSeries && (
              <div className="mt-16 grid gap-4 border-t border-paper-300 pt-8 sm:grid-cols-2">
                <Neighbour post={previous} direction="previous" />
                <Neighbour post={next} direction="next" />
              </div>
            )}

            {hasSeries && (
              <div className="mt-12 rounded-2xl border border-paper-300 p-5 lg:hidden">
                <SeriesNav
                  series={post.series}
                  posts={seriesPosts}
                  currentSlug={post.slug}
                />
              </div>
            )}

            <div className="mt-12 border-t border-paper-300 pt-8">
              <Link href="/blog" className="link-underline text-sm font-medium">
                ← {Translate('blog.back')}
              </Link>
            </div>
          </article>

          <aside className="hidden xl:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
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
  const { author, content: markdown } = getPostBySlug(params.slug, [
    'author',
    'content'
  ]);
  const summaries = getPostSummaries();
  const post = summaries.find((item) => item.slug === params.slug);
  const { html, headings } = withHeadingIds(
    await markdownToHtml(markdown || '')
  );

  return {
    props: {
      post,
      author: author || 'Helena Strada',
      content: html,
      headings,
      seriesPosts: post.series ? getSeriesPosts(summaries, post.series.key) : []
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getPostSummaries().map((post) => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
}
