import { Translate } from '../../core/utils/translate';

export const BlogHeader = () => {
  return (
    <div className="container-site pb-12 pt-16 md:pb-16 md:pt-24">
      <p className="eyebrow">hstrada / blog</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
        <span className="marker">{Translate('blog.title')}</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg font-light text-ink-600">
        {Translate('blog.description')}
      </p>
    </div>
  );
};
