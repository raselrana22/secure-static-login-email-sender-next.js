import Footer from "../components/footer"
import NavBar from "../components/navbar"

export default function pagesLayout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}