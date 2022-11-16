import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/argentBankLogo.png";

function Header() {
    const pathname = useLocation().pathname;
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                {pathname === "/" || pathname === "/signin" ? (
                    <div>
                        <Link to="/signin" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                ) : (
                    <div className="main-nav-content-item">
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </Link>
                        <Link to="/" className="main-nav-item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
