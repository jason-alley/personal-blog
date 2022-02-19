import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav className="navbar px-6" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <p className="is-size-2 has-text-weight-semibold	">J.C</p>
                        </a>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu px-4">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item">
                                My work
                            </a>
                        </Link>

                        <Link href="/blog">
                            <a className="navbar-item">
                                Blog
                            </a>
                        </Link>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link href="/">
                                    <a className="button is-rounded">
                                        <strong>Contact me</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;