import { remark } from 'remark'
import html from 'remark-html'

export type Heading = {
  id: string
  text: string
}

const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const decode = (text: string) =>
  text
    .replace(/<[^>]+>/g, '')
    .replace(/&#x26;|&amp;/g, '&')
    .replace(/&#x3C;|&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: true }).process(markdown)
  return result.toString()
}

// Gives each <h2> an id so the table of contents can link to it.
export function withHeadingIds(content: string) {
  const headings: Heading[] = []
  const used = new Set<string>()

  const html = content.replace(/<h2>(.*?)<\/h2>/g, (_, inner: string) => {
    const base = slugify(inner) || 'secao'
    let id = base
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`
    used.add(id)
    headings.push({ id, text: decode(inner) })
    return `<h2 id="${id}">${inner}</h2>`
  })

  return { html, headings }
}
