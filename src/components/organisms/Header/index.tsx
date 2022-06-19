import Image from 'next/image'

import { FaGlobeAmericas } from 'react-icons/fa'
import { useTranslation } from '../../../core/hooks/useTranslate'

const myLoader = ({ src, width, quality }) => {
  return `https://hstrada.github.io/public/${src}?w=${width}&q=${quality || 75}`
}

export const Header = () => {
  const { changeCountry } = useTranslation()
  return (
    <header className="px-6 pt-6 flex flex-row justify-between">
      <Image
        loader={myLoader}
        src="/images/hs.png"
        alt="Helena Strada Profile Logo"
        width={23}
        height={36}
      />
      <div className="flex flex-row space-x-4">
        <a onClick={changeCountry}>
          <FaGlobeAmericas />
        </a>
      </div>
    </header>
  )
}
