import { Link } from "react-router-dom";

const USERNAME = "Username"

export function Header({authenticated = false} : {authenticated?: boolean}) {
    return <header>
        <Link to="/">
            <img src="./img/logo.webp" alt="Logo ArgentBank" id="brandLogo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <nav>
            { !authenticated ? (
                <Link to="/sign-in" className="navElement">
                    <i className="fa-solid fa-circle-user navElement__Icon"></i>
                    <span>Sign In</span>
                </Link>
            ) : (
                <>
                    <Link to="/user" className="navElement">
                        <i className="fa-solid fa-circle-user navElement__Icon"></i>
                        <span>{USERNAME}</span>
                    </Link>
                    <Link to="/sign-out" className="navElement">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Sign Out</span>
                    </Link>
                </>
            )}
        </nav>
    </header>
}