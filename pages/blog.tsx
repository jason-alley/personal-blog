import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sortByDate from '../utils/sort-by-date'

import Layout from '../components/Layouts/Layouts'
import Hero from '../components/Hero/Hero';
import BlogList from '../components/Blog-list/BlogList'

 const Blog = ({ posts }) => {
  return (
    <Layout>
      <Hero/>
      <BlogList postsData={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Get files from posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter 
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}

export default Blog;