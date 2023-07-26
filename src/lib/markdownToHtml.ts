import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: true }).process(markdown)
  return result.toString()
}
