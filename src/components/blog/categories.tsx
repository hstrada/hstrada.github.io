import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  categories: string[]
}

export const Categories = ({ categories }: Props) => {
  const { asPath } = useRouter()
  const currentCategory = asPath.split('=')[1]

  const activeClassName =
    'inline-block text-gray-900 rounded-t-lg border-b border-gray-900 py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500'
  const defaultClassName =
    'inline-block text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300'

  return (
    <div className="mt-24 mb-8">
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mx-2">
          <Link
            href={{ pathname: '/blog' }}
            aria-current="page"
            className={
              currentCategory === 'undefined' || currentCategory === undefined
                ? activeClassName
                : defaultClassName
            }
          >
            Ver todos
          </Link>
        </li>
        {categories.map((category) => {
          return (
            <Link
              key={category}
              href={{
                pathname: '/blog',
                query: { category },
              }}
              aria-current="page"
              className={
                category ==
                decodeURIComponent(currentCategory?.replace(/\+/g, ' '))
                  ? activeClassName
                  : defaultClassName
              }
            >
              <li className="mx-2">{category}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
