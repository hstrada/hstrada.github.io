import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

interface Props {
  numberOfPages: number
}

export const Pagination = ({ numberOfPages }) => {
  const router = useRouter()
  const actualPage = Number(router.query.page)

  const defaultClassName = 'border px-3 py-1 rounded-md'
  const selectedClassName = 'px-3 py-1 rounded-md bg-slate-800 text-slate-100'

  return (
    <div className="flex flex-row justify-between font-sans mt-4">
      <Link href={`/blog/${actualPage - 1}`}>
        <div className="border px-3 py-2 rounded-md flex content-center items-center space-x-2">
          <BsArrowLeft size={16} />
          <p>Anterior</p>
        </div>
      </Link>

      <ul className="flex flex-row space-x-2 items-center">
        {Array.from(Array(numberOfPages).keys()).map((page) => {
          return (
            <li
              className={
                actualPage === page + 1 ? selectedClassName : defaultClassName
              }
            >
              <Link href={`/blog/${page + 1}`}>{page + 1}</Link>
            </li>
          )
        })}
      </ul>
      <Link href={`/blog/${actualPage + 1}`}>
        <div className="border px-3 py-2 rounded-md flex content-center items-center space-x-2">
          <p>Próxima</p>
          <BsArrowRight size={16} />
        </div>
      </Link>
    </div>
  )
}
