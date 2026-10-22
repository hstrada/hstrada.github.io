import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

const links = [
  { label: 'GitHub', url: 'https://github.com/hstrada', Icon: FaGithub },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/helenastrada/',
    Icon: FaLinkedinIn
  },
  { label: 'Medium', url: 'https://hstrada.medium.com/', Icon: FaMediumM },
  {
    label: 'Behance',
    url: 'https://www.behance.net/helenastrada',
    Icon: FaBehance
  }
];

type TSocialLinksProps = {
  inverted?: boolean;
};

export const SocialLinks = ({ inverted = false }: TSocialLinksProps) => {
  const base = inverted
    ? 'border-ink-600 text-paper hover:border-yellow-500 hover:bg-yellow-500 hover:text-ink'
    : 'border-paper-300 text-ink hover:border-ink hover:bg-yellow-500';

  return (
    <ul className="flex flex-wrap gap-2">
      {links.map(({ label, url, Icon }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${base}`}
          >
            <Icon size={16} />
          </a>
        </li>
      ))}
    </ul>
  );
};
