import Link from 'next/link';
import TPost from 'interfaces/post';
import { Series } from 'lib/api';
import DateFormatter from 'components/blog/date-formatter';
import { Translate } from '../../../core/utils/translate';
import { Section } from '../../atoms/Section';

const elsewhere = [
  {
    title: 'Criando workflows reutilizáveis com GitHub Actions',
    source: 'balta.io',
    year: 2022,
    url: 'https://balta.io/blog/criando-workflows-reutilizaveis-github-actions'
  },
  {
    title: 'Alterando a cor do tema no React Native',
    source: 'balta.io',
    year: 2021,
    url: 'https://balta.io/blog/react-native-color-scheme'
  },
  {
    title: 'Escolhendo o simulador iOS',
    source: 'Creditas Tech',
    year: 2020,
    url: 'https://medium.com/creditas-tech/escolhendo-o-simulador-ios-cddf9ded03bb'
  },
  {
    title: 'Desmistificando o JOIN',
    source: 'Medium',
    year: 2019,
    url: 'https://hstrada.medium.com/desmistificando-o-join-becaba5ad0a6'
  }
];

type TWritingProps = {
  series: Series[];
  latest: TPost[];
};

export const Writing = ({ series, latest }: TWritingProps) => {
  return (
    <Section
      id="escrita"
      eyebrow={Translate('writing.eyebrow')}
      title={Translate('writing.title')}
      description={Translate('writing.description')}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {series.map((item, index) => (
          <Link
            key={item.key}
            href={`/blog/post/${item.firstSlug}`}
            className={`group flex min-h-[15rem] flex-col justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1 ${
              index === 0
                ? 'bg-yellow-500 text-ink'
                : 'border border-paper-300 bg-white/60 hover:border-ink'
            }`}
          >
            <div>
              <span className="font-display text-xs font-semibold uppercase tracking-wider opacity-70">
                [{item.key}]
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
                {item.name}
              </h3>
              <p className="mt-2 text-sm opacity-70">
                {item.categories.filter((c) => c !== item.name).slice(0, 3).join(' · ')}
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <span className="font-display text-4xl font-bold tabular-nums leading-none">
                {String(item.count).padStart(2, '0')}
                <span className="ml-1 text-sm font-medium">
                  {Translate('writing.posts')}
                </span>
              </span>
              <span className="text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {Translate('writing.start')} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="eyebrow">{Translate('writing.latest')}</h3>
          <ul className="mt-4 divide-y divide-paper-300 border-t border-paper-300">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/post/${post.slug}`}
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-medium transition-colors group-hover:text-yellow-600">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-xs text-ink-400">
                    <DateFormatter dateString={post.date} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="link-underline mt-6 inline-block text-sm font-medium">
            {Translate('writing.all')}
          </Link>
        </div>

        <div className="lg:col-span-5">
          <h3 className="eyebrow">{Translate('writing.elsewhere')}</h3>
          <ul className="mt-4 divide-y divide-paper-300 border-t border-paper-300">
            {elsewhere.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span>
                    <span className="block font-medium transition-colors group-hover:text-yellow-600">
                      {post.title}{' '}
                      <span aria-hidden className="text-ink-400">&#8599;&#xFE0E;</span>
                    </span>
                    <span className="text-xs text-ink-400">{post.source}</span>
                  </span>
                  <span className="shrink-0 font-display text-xs tabular-nums text-ink-400">
                    {post.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
