import Link from "next/link"
const BlogList = ({ postsData }) => {
    return (
        <section className="section container">
            {postsData.map((post, index) => {
                return (
                    <div className="box" key={index}>
                        <p className="title">{post.frontmatter.title}</p>
                        <span className="tag is-warning is-light has-text-weight-medium">{post.frontmatter.author}</span>
                        <span className="tag is-light has-text-weight-medium ml-4">{post.frontmatter.date}</span>
                        <p className="block mt-4">{post.frontmatter.excerpt}</p>
                        <Link href={'post' === post.frontmatter.type ? `/blog/${post.slug}` : `/${post.slug}`}>
                            <a className="has-text-weight-semibold has-text-dark"> Read More -&gt; </a>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}

export default BlogList