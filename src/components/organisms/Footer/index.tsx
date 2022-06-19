import { SocialMedia } from 'components/molecules/SocialMedia'
import { loader } from 'core/utils/loader'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="px-6 pb-6 pt-16 flex flex-row items-end justify-between">
      <div>
        <Image
          loader={loader}
          src="/images/hs.png"
          alt="Helena Strada Profile Logo"
          width={23}
          height={36}
        />
      </div>

      <div className="space-x-4">
        <SocialMedia />
      </div>
    </footer>
  )
}
