import NavBar from "./navbar";
import Footer from "./footer"

const Layout = ({ children }: any) => {

    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;