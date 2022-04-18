import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sortByDate from '../utils/sort-by-date'

import Layout from '../components/Layouts/Layouts'
import Hero from '../components/Hero/Hero';
import RecentPosts from '../components/Recent-posts/Recent-posts';
import FeaturedWorks from '../components/Featured-works/Featured-work'


const Index = ({ posts, work }) => {
  return (
    <Layout>
      <Hero />
      <RecentPosts posts={posts} />
      <button className="js-modal-trigger" data-target="modal-js-example">
        Open JS example modal
      </button>
      <div className="modal" id="modal-js-example">
        <div className="modal-background"></div>
        <div className="modal-content">
          some content
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
      <FeaturedWorks posts={work} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Get files from posts dir
  const files = fs.readdirSync(path.join('posts'))
  const workFiles = fs.readdirSync(path.join('featuredWork'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter 
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  const featWork = workFiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter 
    const markdownWithMeta = fs.readFileSync(path.join('featuredWork', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate),
      work: featWork.sort(sortByDate),
    }
  }
}

export default Index;