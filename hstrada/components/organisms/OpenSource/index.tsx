import { t } from '../../../core/utils/translate'
import Button from '../../atoms/Button'
import { OpenSourceItem } from '../../molecules/OpenSourceItem'

export const OpenSource = () => {
  return (
    <section className="px-6 mt-28">
      <div className="max-w-screen-lg flex flex-col mx-auto">
        <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
          Open Source
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-16">
          <OpenSourceItem
            description={t('opensource.readit.description')}
            button={t('opensource.readit.button')}
          />
          <OpenSourceItem
            description={t('opensource.pure.description')}
            button={t('opensource.pure.button')}
          />
        </div>
      </div>
    </section>
  )
}
