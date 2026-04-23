import { Link } from "react-router-dom"


export default function AppFooter() {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <h1 className="text-info">MovieRev <i className="bi bi-camera-reels-fill text-white fs-2"></i> </h1>
                <Link to='/' className="text-white btn btn-outline-info px-3 py-1 border-2 mt-1">Movie list</Link>
            </div>
        </nav>
    )
}