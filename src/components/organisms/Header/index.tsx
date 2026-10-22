import Link from 'next/link';
import { useTranslation } from '../../../core/hooks/useTranslate';
import { Translate } from '../../../core/utils/translate';
import { Logo } from '../../atoms/Logo';

export const Header = () => {
  const { changeCountry } = useTranslation();

  const nav = [
    { href: '/#trajetoria', label: Translate('nav.work') },
    { href: '/#escrita', label: Translate('nav.writing') },
    { href: '/#stack', label: Translate('nav.stack') }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-paper-300/70 bg-paper/85 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-1 text-sm">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden rounded-full px-3 py-1.5 text-ink-600 transition-colors hover:bg-paper-200 hover:text-ink sm:block"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-full px-3 py-1.5 font-medium text-ink transition-colors hover:bg-paper-200"
          >
            {Translate('nav.blog')}
          </Link>
          <button
            type="button"
            onClick={changeCountry}
            className="ml-2 rounded-full border border-ink px-3 py-1 font-display text-xs font-semibold tracking-wider transition-colors hover:bg-yellow-500"
          >
            {Translate('nav.language')}
          </button>
        </nav>
      </div>
    </header>
  );
};
