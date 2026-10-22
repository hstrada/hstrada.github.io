import { Translate } from '../../../core/utils/translate';
import { Section } from '../../atoms/Section';

const groups = [
  {
    key: 'backend',
    primary: true,
    items: ['Kotlin', 'Java', 'Spring', 'C#', '.NET', 'EF Core', 'Hibernate', 'REST', 'GraphQL']
  },
  {
    key: 'data',
    primary: true,
    items: ['SQL Server', 'MySQL', 'Redis', 'Modelagem de dados', 'Docker']
  },
  {
    key: 'practices',
    primary: true,
    items: ['Clean Architecture', 'Design Patterns', 'CQRS', 'Microservices', 'CI/CD', 'GitHub Actions']
  },
  {
    key: 'frontend',
    primary: false,
    items: ['TypeScript', 'React', 'Next.js', 'React Native', 'Jest']
  }
];

export const Stack = () => {
  return (
    <Section
      id="stack"
      eyebrow={Translate('stack.eyebrow')}
      title={Translate('stack.title')}
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-300 bg-paper-300 md:grid-cols-2">
        {groups.map(({ key, primary, items }) => (
          <div key={key} className="bg-paper p-6 md:p-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <span
                className={`h-2 w-2 rounded-full ${primary ? 'bg-yellow-500' : 'bg-paper-300'}`}
              />
              {Translate(`stack.${key}`)}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    primary
                      ? 'border-ink/15 bg-white/70 text-ink'
                      : 'border-paper-300 text-ink-600'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="eyebrow">{Translate('stack.education')}</h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <li key={index} className="border-l-2 border-yellow-500 pl-4">
              <span className="text-xs uppercase tracking-wider text-ink-400">
                {Translate(`stack.edu.${index}.level`)}
              </span>
              <p className="mt-1 font-display font-semibold leading-snug">
                {Translate(`stack.edu.${index}.title`)}
              </p>
              <span className="text-sm text-ink-600">
                {Translate(`stack.edu.${index}.place`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
