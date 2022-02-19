import Link from "next/link";

const Hero = () => {
    return (
        <section className="hero is-medium is-warning">
            <div className="hero-body">
                <p className="title is-size-1">
                    Hi, I am Jason,
                </p>
                <p className="title is-size-1">
                    Front-end developer.
                </p>
                <p className="subtitle has-text-weight-medium mt-2 is-size-4 pr-6">
                    I enjoy working with everything Javascript related from frameworks to libraries. I  also enjoy working on exciting and challenging projects, with fun and energetic individuals, using new & emerging web technologies. I aim to deliver the best possible service to my clients delivering a final product that is user friendly with exceptional design and accessible across all browsers and devices.
                </p>
                <Link href="/">
                    <a className="button is-medium is-rounded mt-4">
                        <strong>Download Resume</strong>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default Hero;