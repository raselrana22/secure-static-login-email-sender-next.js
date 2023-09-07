import NavbarBeforeLogin from "../components/navbar-before-login"
import FooterBeforeLogin from "../components/footer-before-login"

export default function StatingPageLayout({ children }) {
    return (
        <div>
            <NavbarBeforeLogin />
            {children}
            <FooterBeforeLogin />
        </div>
    )
}