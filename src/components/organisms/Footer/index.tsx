import { SocialMedia } from 'components/molecules/SocialMedia'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://hstrada.github.io/public/${src}?w=${width}&q=${quality || 75}`
}

export const Footer = () => {
  return (
    <footer className="px-6 pb-6 pt-16 flex flex-row items-end justify-between">
      <div>
        <Image
          loader={myLoader}
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
