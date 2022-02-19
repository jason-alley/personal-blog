const HeroSecondary = ({ postData }) => {
    return (
        <section className="hero is-small is-warning">
            <div className="hero-body my-5 container">
                <p className="title is-size-2">
                    {postData.title}
                </p>
                <p className="title is-size-4">
                   {postData.author}
                </p>
                <p className="title is-size-6">
                   {postData.date}
                </p>
                <p className="subtitle has-text-weight-medium mt-2 is-size-4 pr-6">
                   {postData.excerpt}
                </p>
            </div>
        </section>
    )
}

export default HeroSecondary;