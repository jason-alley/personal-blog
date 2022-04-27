
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = ({ container }) => {
    return (
        <>
            <Header/>
            <main className={container}></main>
            <Footer/>
        </>
    )
}

export default Layout;