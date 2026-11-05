import Head from 'next/head';
import Link from 'next/link';

import {
  getJourney,
  getPostBySlug,
  getPostSummaries,
  Journey,
  PostSummary
} from 'lib/api';
import markdownToHtml, { Heading, withHeadingIds } from 'lib/markdownToHtml';

import PostHeader from 'components/blog/post/post-header';
import PostBody from 'components/blog/post/post-body';
import { JourneyNav } from 'components/blog/post/journey-nav';
import { TableOfContents } from 'components/blog/post/table-of-contents';
import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { Translate } from '../../../core/utils/translate';

type Props = {
  post: PostSummary;
  author: string;
  content: string;
  headings: Heading[];
  journey: Journey | null;
};

const Neighbour = ({
  href,
  label,
  title,
  alignRight = false
}: {
  href: string;
  label: string;
  title: string;
  alignRight?: boolean;
}) => (
  <Link
    href={href}
    className={`group flex flex-col rounded-2xl border border-paper-300 p-5 transition-colors hover:border-ink hover:bg-white/60 ${
      alignRight ? 'sm:col-start-2 sm:items-end sm:text-right' : ''
    }`}
  >
    <span className="eyebrow">{label}</span>
    <span className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-yellow-600">
      {title}
    </span>
  </Link>
);

export default function Post({
  post,
  author,
  content,
  headings,
  journey
}: Props) {
  const index = journey
    ? journey.lessons.findIndex((item) => item.slug === post.slug)
    : -1;
  const previous = index > 0 ? journey.lessons[index - 1] : undefined;
  const next = index >= 0 ? journey.lessons[index + 1] : undefined;
  const nextJourney = index >= 0 && !next ? journey.next : null;

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
              {journey ? (
                <JourneyNav journey={journey} currentSlug={post.slug} />
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

            {journey && (previous || next || nextJourney) && (
              <div className="mt-16 grid gap-4 border-t border-paper-300 pt-8 sm:grid-cols-2">
                {previous && (
                  <Neighbour
                    href={`/blog/post/${previous.slug}`}
                    label={`← ${Translate('blog.previous')}`}
                    title={previous.shortTitle}
                  />
                )}
                {next && (
                  <Neighbour
                    href={`/blog/post/${next.slug}`}
                    label={`${Translate('blog.next')} →`}
                    title={next.shortTitle}
                    alignRight
                  />
                )}
                {nextJourney && (
                  <Neighbour
                    href={`/blog/jornada/${nextJourney.slug}`}
                    label={`${Translate('blog.next_journey')} →`}
                    title={nextJourney.name}
                    alignRight
                  />
                )}
              </div>
            )}

            {journey && (
              <div className="mt-12 rounded-2xl border border-paper-300 p-5 lg:hidden">
                <JourneyNav journey={journey} currentSlug={post.slug} />
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
      journey: post.journey ? getJourney(summaries, post.journey.slug) : null
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
