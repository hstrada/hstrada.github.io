import { Translate } from '../../../core/utils/translate'
import { SocialMedia } from 'components/molecules/SocialMedia'

export const Hero = () => {
  return (
    <section className="h-screen px-6">
      <div className="max-w-screen-lg h-full flex justify-center items-start flex-col mx-auto bg-hero bg-no-repeat bg-center bg-auto">
        <span className="text-gray-700 text-xl pb-1 font-light font-sans">
          Helena Strada
        </span>
        <h1 className="text-7xl leading-tight font-bold max-w-screen-lg font-sans">
          {Translate('hero.title')}
          <br />
          {Translate('hero.area')}
        </h1>
        <p className="pt-8 max-w-screen-sm text-gray-700 text-sm font-light font-display leading-[2]">
          {Translate('hero.description')}
        </p>
        <div className="pt-8 space-x-4">
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
