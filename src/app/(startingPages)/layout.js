import LoginBeforeNavBar from "../components/login-before-navbar"

export default function StatingPageLayout({ children }) {
    return (
        <div>
            <LoginBeforeNavBar />
            {children}
        </div>
    )
}