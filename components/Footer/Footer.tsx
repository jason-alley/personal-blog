import Script from "next/script"


const Footer = () => {
    return (
        <footer className="footer">
            <Script src="/bulma-events.js" strategy="beforeInteractive" />
            <div className="content has-text-centered">
                <p>
                    <strong>J.C</strong> by Jason Cameron
                </p>
            </div>
        </footer>
    )
}

export default Footer