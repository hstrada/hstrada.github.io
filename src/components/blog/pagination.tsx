import Link from 'next/link';
import { useRouter } from 'next/router';
import { Translate } from '../../core/utils/translate';

interface Props {
  numberOfPages: number;
}

const pageClassName =
  'flex h-9 min-w-[2.25rem] items-center justify-center rounded-full px-3 font-display text-sm transition-colors';
const navClassName =
  'rounded-full border border-paper-300 px-4 py-2 text-sm transition-colors hover:border-ink';
const disabledClassName =
  'rounded-full border border-paper-300 px-4 py-2 text-sm text-ink-400 opacity-50';

export const Pagination = ({ numberOfPages }: Props) => {
  const router = useRouter();
  const actualPage = Number(router.query.page ?? 1);

  const hasPreviousPage = actualPage >= 2;
  const hasNextPage = actualPage < numberOfPages;

  if (numberOfPages <= 1) return null;

  return (
    <nav className="mt-16 flex items-center justify-between">
      {hasPreviousPage ? (
        <Link href={`/blog/${actualPage - 1}`} className={navClassName}>
          ← {Translate('blog.previous')}
        </Link>
      ) : (
        <span className={disabledClassName}>← {Translate('blog.previous')}</span>
      )}

      <ul className="flex items-center gap-1">
        {Array.from(Array(numberOfPages).keys()).map((page) => (
          <li key={page}>
            <Link
              href={`/blog/${page + 1}`}
              className={`${pageClassName} ${
                actualPage === page + 1
                  ? 'bg-ink text-paper'
                  : 'hover:bg-paper-200'
              }`}
            >
              {page + 1}
            </Link>
          </li>
        ))}
      </ul>

      {hasNextPage ? (
        <Link href={`/blog/${actualPage + 1}`} className={navClassName}>
          {Translate('blog.next')} →
        </Link>
      ) : (
        <span className={disabledClassName}>{Translate('blog.next')} →</span>
      )}
    </nav>
  );
};
