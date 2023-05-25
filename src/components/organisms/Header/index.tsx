import Image from 'next/image'

import { FaGlobeAmericas } from 'react-icons/fa'
import { useTranslation } from '../../../core/hooks/useTranslate'

export const Header = () => {
  const { changeCountry } = useTranslation()
  return (
    <header className="px-6 pt-6 flex flex-row justify-between">
      <Image
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
