import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory, { withFileTypes: true })
}

type Items = {
  [key: string]: string
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, `${slug}/index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .filter((item) => item.isDirectory())
    .map((slug) => getPostBySlug(slug.name, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllCategories(allPosts: Items[]) {
  const searchForCategories = allPosts.map((post) => post.categories)
  const combineCategories = [...new Set(searchForCategories.flat(1))]
  return combineCategories
}

export function getTotalPosts() {
  const allPosts = getAllPosts()
  return allPosts.length
}

export function renderPostsByPage(posts: Items[], pageNumber: number) {
  const INITIAL_NUMBER_TO_RENDER = 0;
  const POSTS_PER_PAGE = 10;

  const renderPosts = {
    1: posts.slice(INITIAL_NUMBER_TO_RENDER, POSTS_PER_PAGE),
    2: posts.slice(POSTS_PER_PAGE, POSTS_PER_PAGE * pageNumber)
  };

  const filteredPosts =
    renderPosts[pageNumber] ||
    posts.slice(
      POSTS_PER_PAGE * pageNumber - POSTS_PER_PAGE,
      POSTS_PER_PAGE * pageNumber
    );

  return filteredPosts
}

export type Series = {
  key: string
  name: string
  count: number
  firstSlug: string
  categories: string[]
}

const SERIES_NAMES: { [key: string]: string } = {
  BD: 'Banco de Dados',
  BackEnd: 'BackEnd',
  'C#': 'C#',
  Kotlin: 'Kotlin'
}

// Titles like "[BD03] Criando o banco de dados" belong to the "BD" series.
const SERIES_PATTERN = /^\[(.+?)\d+\]/

export function getSeries(allPosts: Items[]): Series[] {
  const series: { [key: string]: Series & { firstTitle: string } } = {}

  allPosts.forEach((post) => {
    const match = post.title?.match(SERIES_PATTERN)
    if (!match) return

    const key = match[1]
    const current = series[key]
    const categories = (post.categories as unknown as string[]) || []

    if (!current) {
      series[key] = {
        key,
        name: SERIES_NAMES[key] || key,
        count: 1,
        firstSlug: post.slug,
        firstTitle: post.title,
        categories: [...categories]
      }
      return
    }

    current.count += 1
    current.categories = [...new Set([...current.categories, ...categories])]
    if (post.title < current.firstTitle) {
      current.firstSlug = post.slug
      current.firstTitle = post.title
    }
  })

  return Object.values(series)
    .map(({ firstTitle, ...rest }) => rest)
    .sort((a, b) => b.count - a.count)
}
