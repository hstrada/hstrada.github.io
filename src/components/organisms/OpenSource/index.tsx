import { t } from '../../../core/utils/translate'
import { SectionDiv } from '../../atoms/SectionDiv'
import { OpenSourceItem } from '../../molecules/OpenSourceItem'

export const OpenSource = () => {
  return (
    <section className="px-6 mt-48">
      <SectionDiv title="Open Source">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16">
          <OpenSourceItem
            description={t('opensource.datase.description')}
            button={t('opensource.datase.button')}
            url="https://github.com/hstrada/datase-dsl-sql/"
          />
          <OpenSourceItem
            description={t('opensource.readit.description')}
            button={t('opensource.readit.button')}
            url="https://readit-readme.netlify.app/"
          />
          <OpenSourceItem
            description={t('opensource.pure.description')}
            button={t('opensource.pure.button')}
            url="https://pure-css.netlify.app/"
          />
        </div>
      </SectionDiv>
    </section>
  )
}
