import { useEffect, useState } from 'react';
import { Heading } from 'lib/markdownToHtml';
import { Translate } from '../../../core/utils/translate';

type Props = {
  headings: Heading[];
};

export const TableOfContents = ({ headings }: Props) => {
  const [active, setActive] = useState(headings[0]?.id);

  // Highlights the section currently near the top of the viewport.
  useEffect(() => {
    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label={Translate('blog.on_this_page')}>
      <p className="eyebrow">{Translate('blog.on_this_page')}</p>
      <ul className="mt-4 space-y-1 border-l border-paper-300">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`-ml-px block border-l-2 py-1 pl-4 text-sm leading-snug transition-colors ${
                active === id
                  ? 'border-yellow-500 font-medium text-ink'
                  : 'border-transparent text-ink-400 hover:text-ink'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
