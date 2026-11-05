import { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiSearch, FiX } from 'react-icons/fi';

import { Area, getAreas, getPostSummaries, PostSummary } from 'lib/api';

import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { JourneyCard } from 'components/blog/journey-card';
import { PostCard } from 'components/blog/post-card';
import { Translate } from '../../core/utils/translate';

type Props = {
  posts: PostSummary[];
  areas: Area[];
};

const ALL = 'all';
const STANDALONE = 'standalone';

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const searchableText = (post: PostSummary) =>
  normalize(
    [
      post.title,
      post.excerpt,
      post.journey?.name,
      post.journey?.areaName,
      ...post.categories
    ].join(' ')
  );

export default function Blog({ posts, areas }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  // The selected area lives in the URL, so /blog?area=backend can be shared.
  const filter = typeof router.query.area === 'string' ? router.query.area : ALL;

  // Keeps the selected chip visible in the horizontally scrolling row.
  const chipsRef = useRef<HTMLDivElement>(null);
  const chipsPositioned = useRef(false);
  useEffect(() => {
    if (!router.isReady) return;
    const row = chipsRef.current;
    const chip = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!row || !chip) return;
    row.scrollTo({
      left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2,
      behavior: chipsPositioned.current ? 'smooth' : 'auto'
    });
    chipsPositioned.current = true;
  }, [filter, router.isReady]);

  const selectFilter = (value: string) => {
    const nextQuery = value === ALL ? {} : { area: value };
    router.replace({ pathname: '/blog', query: nextQuery }, undefined, {
      shallow: true,
      scroll: false
    });
  };

  const isSearching = query.trim().length > 0;
  const standalonePosts = posts.filter((post) => !post.journey);
  const journeyCount = areas.reduce((total, area) => total + area.journeys.length, 0);

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);

    return posts.filter((post) => {
      if (filter === STANDALONE && post.journey) return false;
      if (filter !== ALL && filter !== STANDALONE && post.journey?.areaKey !== filter)
        return false;

      const text = searchableText(post);
      return terms.every((term) => text.includes(term));
    });
  }, [posts, query, filter]);

  const visibleAreas = areas.filter(
    (area) => filter === ALL || filter === area.key
  );
  const showStandalone =
    standalonePosts.length > 0 && (filter === ALL || filter === STANDALONE);

  const filters = [
    { key: ALL, label: Translate('blog.all'), count: journeyCount },
    ...areas.map((area) => ({
      key: area.key,
      label: area.name,
      count: area.journeys.length
    })),
    ...(standalonePosts.length > 0
      ? [
          {
            key: STANDALONE,
            label: Translate('blog.standalone'),
            count: standalonePosts.length
          }
        ]
      : [])
  ];

  const stats = [
    { value: areas.length, label: Translate('blog.areas') },
    { value: journeyCount, label: Translate('blog.journeys') },
    { value: posts.length - standalonePosts.length, label: Translate('blog.lessons') }
  ];

  const clear = () => {
    setQuery('');
    selectFilter(ALL);
  };

  return (
    <>
      <Head>
        <title>{`${Translate('blog.title')} — Helena Strada`}</title>
        <meta name="description" content={Translate('blog.description')} />
      </Head>
      <Header />

      <main>
        <section className="container-site pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">hstrada / blog</p>
              <h1 className="mt-4 font-display text-6xl font-bold tracking-tight sm:text-8xl">
                <span className="marker">{Translate('blog.title')}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-600">
                {Translate('blog.description')}
              </p>
            </div>
            <dl className="grid grid-cols-3 divide-x divide-paper-300 rounded-2xl border border-paper-300 bg-white/60 lg:col-span-5">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-4 py-5 sm:px-6">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl font-bold tabular-nums sm:text-4xl">
                    {value}
                  </dd>
                  <dd className="mt-1 text-xs text-ink-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="sticky top-16 z-10 border-y border-paper-300 bg-paper/90 backdrop-blur">
          <div className="container-site flex flex-col gap-3 py-3 lg:flex-row lg:items-center">
            <label className="relative flex-1 lg:max-w-md">
              <span className="sr-only">{Translate('blog.search')}</span>
              <FiSearch
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
                size={18}
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={Translate('blog.search')}
                className="w-full rounded-full border border-paper-300 bg-white py-2.5 pl-11 pr-10 text-sm outline-none transition-colors placeholder:text-ink-400 focus:border-ink [&::-webkit-search-cancel-button]:hidden"
              />
              {isSearching && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={Translate('blog.clear')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-400 hover:bg-paper-200 hover:text-ink"
                >
                  <FiX size={16} />
                </button>
              )}
            </label>

            <div
              ref={chipsRef}
              className="relative -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:pb-0">
              {filters.map(({ key, label, count }) => {
                const active = filter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectFilter(key)}
                    aria-pressed={active}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      active
                        ? 'border-ink bg-ink text-paper'
                        : 'border-paper-300 bg-white/60 text-ink-600 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {label}
                    <span
                      className={`font-display text-xs tabular-nums ${
                        active ? 'text-yellow-500' : 'text-ink-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container-site pb-24 pt-10 md:pt-12">
          {isSearching ? (
            <section>
              {results.length > 0 ? (
                <>
                  <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight">
                    {results.length} {Translate('blog.results')}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-3xl border border-dashed border-paper-300 px-6 py-20 text-center">
                  <p className="font-display text-2xl font-semibold">
                    {Translate('blog.empty_title')}
                  </p>
                  <p className="mt-2 text-ink-600">
                    {Translate('blog.empty_description')}
                  </p>
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-yellow-500 hover:text-ink"
                  >
                    {Translate('blog.clear')}
                  </button>
                </div>
              )}
            </section>
          ) : (
            <div className="space-y-16 md:space-y-20">
              {visibleAreas.map((area) => (
                <section key={area.key} aria-labelledby={`area-${area.key}`}>
                  <h2
                    id={`area-${area.key}`}
                    className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    {area.name}
                  </h2>
                  <p className="mt-2 text-ink-600">{area.description}</p>
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {area.journeys.map((journey) => (
                      <JourneyCard key={journey.slug} journey={journey} />
                    ))}
                  </div>
                </section>
              ))}

              {showStandalone && (
                <section aria-labelledby="area-standalone">
                  <h2
                    id="area-standalone"
                    className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    {Translate('blog.standalone')}
                  </h2>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {standalonePosts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getPostSummaries();

  return {
    props: {
      posts,
      areas: getAreas(posts)
    }
  };
};
