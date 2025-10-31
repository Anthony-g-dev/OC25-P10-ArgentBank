import { Link } from "react-router-dom";

export function Header() {
    return <header>
        <Link to="/">
            <img src="./img/logo.webp" alt="Logo ArgentBank" id="brandLogo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <nav>
            <Link to="/sign-in" className="navElement">
                <i className="fa-solid fa-circle-user navElement__Icon"></i>
                <span>Sign In</span>
            </Link>
        </nav>
    </header>
}