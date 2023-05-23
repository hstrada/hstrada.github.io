import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from '../interfaces/post'

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
    .filter(item => item.isDirectory())
    .map((slug) => getPostBySlug(slug.name, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllCategories(allPosts: Items[]) {
  const searchForCategories = allPosts.map(post => post.categories)
  const combineCategories = searchForCategories.flat(1)
  return combineCategories
}