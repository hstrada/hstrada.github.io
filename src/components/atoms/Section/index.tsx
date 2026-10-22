import { ReactNode } from 'react';

type TSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children
}: TSectionProps) => {
  return (
    <section id={id} className="scroll-mt-20 border-t border-paper-300">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-xl text-ink-600">{description}</p>
            )}
          </div>
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
};
