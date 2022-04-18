
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = ({children, container}) => {
    return (
        <>
            <Header/>
            <main className={container}>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;