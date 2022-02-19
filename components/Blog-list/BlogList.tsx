const BlogList = ({ postsData }) => {
    return (
        <section className="section">
            {console.log(postsData)}
            {postsData.map((post, index) => {
                <div className="box" key={index}>
                    <p className="title">{post.frontmatter.title}</p>
                </div>
            })}
        </section>
    )
}

export default BlogList