import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props {
  numberOfPages: number;
}

const defaultClassName = 'border px-3 py-1 rounded-md';
const selectedClassName = 'px-3 py-1 rounded-md bg-slate-800 text-slate-100';

const disabledIconColor = '#b8b8b8';
const activeIconColor = '#121212';

export const Pagination = ({ numberOfPages }: Props) => {
  const router = useRouter();
  const actualPage = Number(router.query.page);

  const hasPreviousPage = numberOfPages >= 2 && actualPage >= 2;
  const hasNextPage = actualPage < numberOfPages;

  return (
    <div className="flex flex-row justify-between font-sans mt-24">
      <Link href={`/blog/${actualPage - 1}`}>
        <button
          className="border px-3 py-2 rounded-md flex content-center items-center disabled:text-gray-500"
          disabled={!hasPreviousPage}
        >
          <BsArrowLeft
            color={hasPreviousPage ? activeIconColor : disabledIconColor}
            size={16}
            className="mr-2"
          />
          Anterior
        </button>
      </Link>

      <ul className="flex flex-row space-x-2 items-center">
        {Array.from(Array(numberOfPages).keys()).map((page) => {
          return (
            <li
              key={page}
              className={
                actualPage === page + 1 ? selectedClassName : defaultClassName
              }
            >
              <Link href={`/blog/${page + 1}`}>{page + 1}</Link>
            </li>
          );
        })}
      </ul>
      <Link href={`/blog/${actualPage + 1}`}>
        <button
          disabled={!hasNextPage}
          className="border px-3 py-2 rounded-md flex content-center items-center disabled:text-gray-500"
        >
          Próxima
          <BsArrowRight
            color={hasNextPage ? activeIconColor : disabledIconColor}
            size={16}
            className="ml-2"
          />
        </button>
      </Link>
    </div>
  );
};
