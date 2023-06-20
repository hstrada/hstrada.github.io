import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from '../interfaces/post'
import TPost from '../interfaces/post'

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
