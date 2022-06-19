import { SectionDiv } from 'components/atoms/SectionDiv'
import { FaInfo } from 'react-icons/fa'
import { t } from '../../../core/utils/translate'
import { EducationalItem } from '../../molecules/EducationalItem'
import styles from './styles.module.css'

export const Blog = () => {
  return (
    <section className="px-6 mt-28">
      <SectionDiv title={t('blog.title')}>
        <p></p>
      </SectionDiv>
    </section>
  )
}
