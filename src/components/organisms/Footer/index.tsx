import Image from 'next/image';
import { Translate } from '../../../core/utils/translate';
import { SocialLinks } from '../../atoms/SocialLinks';

export const Footer = () => {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-site py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:col-span-8">
            {Translate('footer.title')}
          </h2>
          <div className="md:col-span-4 md:flex md:justify-end">
            <SocialLinks inverted />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ink-800 pt-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/hs.svg"
              alt=""
              width={14}
              height={22}
              className="invert"
            />
            <span>© {new Date().getFullYear()} Helena Strada</span>
          </div>
          <span className="italic">{Translate('footer.motto')}</span>
        </div>
      </div>
    </footer>
  );
};
