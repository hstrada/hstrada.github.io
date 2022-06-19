import { SocialMedia } from 'components/molecules/SocialMedia'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="px-6 py-6 flex flex-row items-end justify-between">
      <div>
        <Image
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
