import Head from 'next/head';
import Link from 'next/link';

import { getAreas, getJourney, getPostSummaries, Journey } from 'lib/api';

import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { Translate } from '../../../core/utils/translate';

type Props = {
  journey: Journey;
};

export default function JourneyPage({ journey }: Props) {
  return (
    <>
      <Head>
        <title>{`${journey.name} — Helena Strada`}</title>
        <meta name="description" content={journey.description} />
      </Head>
      <Header />

      <main className="container-site pb-24 pt-10 md:pt-14">
        <Link
          href={`/blog?area=${journey.areaKey}`}
          className="text-sm text-ink-600 transition-colors hover:text-ink"
        >
          ← {journey.areaName}
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">{journey.areaName}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {journey.name}
          </h1>
          <p className="mt-5 text-xl font-light leading-relaxed text-ink-600">
            {journey.description}
          </p>
          <p className="mt-5 text-sm text-ink-600">
            {journey.lessons.length} {Translate('blog.lessons')} ·{' '}
            {journey.minutes} {Translate('blog.minutes')}
          </p>
          <Link
            href={`/blog/post/${journey.lessons[0].slug}`}
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-yellow-500 hover:text-ink"
          >
            {Translate('blog.start')} →
          </Link>
        </header>

        <ol className="mt-14 max-w-3xl border-t border-paper-300">
          {journey.lessons.map((post, index) => (
            <li key={post.slug} className="border-b border-paper-300">
              <Link
                href={`/blog/post/${post.slug}`}
                className="group flex gap-5 py-6 sm:gap-8"
              >
                <span className="font-display text-2xl font-bold tabular-nums text-ink-400 transition-colors group-hover:text-yellow-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-yellow-600">
                    {post.shortTitle}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-600">
                    {post.excerpt}
                  </span>
                  <span className="mt-2 block text-xs text-ink-400">
                    {post.readingTime} {Translate('blog.minutes')}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {journey.next && (
          <Link
            href={`/blog/jornada/${journey.next.slug}`}
            className="group mt-10 flex max-w-3xl flex-col rounded-2xl border border-paper-300 p-5 transition-colors hover:border-ink hover:bg-white/60"
          >
            <span className="eyebrow">{Translate('blog.next_journey')} →</span>
            <span className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-yellow-600">
              {journey.next.name}
            </span>
          </Link>
        )}
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
  return {
    props: {
      journey: getJourney(getPostSummaries(), params.slug)
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getAreas(getPostSummaries())
      .flatMap((area) => area.journeys)
      .map((journey) => ({ params: { slug: journey.slug } })),
    fallback: false
  };
}
