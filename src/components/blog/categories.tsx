import Link from 'next/link';

interface Props {
  categories: string[];
}

export const Categories = ({ categories }: Props) => {
  return (
    <div className="mt-24 mb-8">
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mr-2">
          <Link
            href={{ pathname: '/blog' }}
            aria-current="page"
            className="inline-block text-gray-900 rounded-t-lg border-b border-gray-900 py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500"
          >
            Ver todos
          </Link>
        </li>
        {categories.map((category) => (
          <Link
            key={category}
            href={{
              pathname: '/blog',
              query: { category }
            }}
            className="inline-block text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            <li className="mr-2">{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
