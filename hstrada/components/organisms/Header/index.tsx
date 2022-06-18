import Image from 'next/image'

import { FaGlobeAmericas, FaBars } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="px-6 pt-6 flex flex-row justify-between">
      <Image
        src="/images/hs.png"
        alt="Helena Strada Profile Logo"
        width={23}
        height={36}
      />
      <div className="flex flex-row space-x-4">
        <a>
          <FaGlobeAmericas />
        </a>
        <a>
          <FaBars />
        </a>
      </div>
    </header>
  )
}
