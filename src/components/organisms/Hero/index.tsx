import Link from 'next/link';
import { Translate } from '../../../core/utils/translate';
import { SocialLinks } from '../../atoms/SocialLinks';

const pillars = ['build', 'teach', 'learn'];

const CodeCard = () => (
  <div className="relative">
    <div
      aria-hidden
      className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-yellow-500"
    />
    <figure className="relative overflow-hidden rounded-2xl bg-ink text-[13px] leading-6 text-paper-300 shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="ml-3 font-display text-xs text-ink-400">Helena.kt</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono">
        <code>
          <span className="text-yellow-500">data class</span> Engineer(
          {'\n'}  <span className="text-yellow-500">val</span> name = <span className="text-paper">&quot;Helena Strada&quot;</span>,
          {'\n'}  <span className="text-yellow-500">val</span> focus = <span className="text-paper">&quot;backend&quot;</span>,
          {'\n'}  <span className="text-yellow-500">val</span> stack = listOf(
          {'\n'}    <span className="text-paper">&quot;Kotlin&quot;</span>, <span className="text-paper">&quot;Java&quot;</span>, <span className="text-paper">&quot;C#&quot;</span>
          {'\n'}  ),
          {'\n'}  <span className="text-yellow-500">val</span> teaches = <span className="text-yellow-500">true</span>,
          {'\n'})
          {'\n'}
          {'\n'}<span className="text-ink-400">{'// '}foco, persistência e consistência</span>
        </code>
      </pre>
    </figure>
  </div>
);

export const Hero = () => {
  return (
    <section className="container-site pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">{Translate('hero.role')}</p>
          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {Translate('hero.title_1')} {Translate('hero.title_2')}{' '}
            <span className="marker">{Translate('hero.title_marker')}</span>{' '}
            {Translate('hero.title_3')}
          </h1>
          <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-ink-600">
            {Translate('hero.description')}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-ink px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:bg-yellow-500 hover:text-ink"
            >
              {Translate('hero.cta_writing')} →
            </Link>
            <SocialLinks />
          </div>
        </div>

        <div className="lg:col-span-5">
          <CodeCard />
        </div>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-paper-300 bg-paper-300 md:mt-28 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <div key={pillar} className="bg-paper p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold">
                {Translate(`pillars.${pillar}.title`)}
              </h3>
              <span className="font-display text-xs text-ink-400">
                0{index + 1}
              </span>
            </div>
            <div className="mt-3 h-1 w-8 rounded-full bg-yellow-500" />
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              {Translate(`pillars.${pillar}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
