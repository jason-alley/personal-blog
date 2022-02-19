import Link from "next/link";
const RecentPosts = ({ posts }) => {
    return (
        <section
            className="section container mt-6
        ">
             <p className='is-size-3 my-5 pl-3 is-underlined'>Recent Posts</p>
            <div className="post-preview__wrapper  columns">
                {posts.slice(0, 3).map((post, index) => {
                    return (
                        <div className="post-preview__card box is-half mx-3" key={index}>
                            <p className="title mb-6">{post.frontmatter.title}</p>
                            <p className="subtitle is-size-4">{post.frontmatter.description}</p>
                            <span className="tag is-warning is-light has-text-weight-medium">{post.frontmatter.author}</span>
                            <span className="tag is-light has-text-weight-medium ml-4">{post.frontmatter.date}</span>
                            <p className="block mt-4">{post.frontmatter.excerpt}</p>
                            <Link href={`/blog/${post.slug}`}>
                                <a className="has-text-weight-semibold has-text-dark"> Read More -&gt; </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RecentPosts;