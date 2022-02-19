
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main className="is-fluid">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;