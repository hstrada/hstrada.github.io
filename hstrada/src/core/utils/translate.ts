import { useTranslation } from '../hooks/useTranslate'
import en from '../translation/en.json'
import pt from '../translation/pt.json'

const deepPick = (fields: any, object: any = {}): string => {
  const [first, ...remaining] = fields.split('.')
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first]
}

export const t = (path: string) => {
  const { country } = useTranslation()

  if (country === 'en') return deepPick(path, en)
  return deepPick(path, pt)
}
