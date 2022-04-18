import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

//components 
import Layout from '../../components/Layouts/Layouts'
import HeroSecondary from '../../components/Hero/Hero-secondary'
import MdxContent from '../../components/MdxContent/MdxContent'

const PostPage = ({ frontmatter, slug, content }) => {
    return (
        <Layout container={"container.is-fullhd"}>
            <HeroSecondary postData={frontmatter} />
            <MdxContent content={content} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

    const { data: frontmatter, content }: any = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}

export default PostPage;
