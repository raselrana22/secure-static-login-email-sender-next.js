import NavBar from "../components/navbar"

export default function pagesLayout({ children }) {
    return (
        <div className="w-full h-screen bg-gray-200">
            <NavBar />
            {children}
        </div>
    )
}