import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../feature/user.slice";
import "./Header.css";
import Logo from "../../assets/argentBankLogo.png";

/**
 * It returns the React component that displays the header according to if we are login or not.
 * @returns A React component
 */
function Header() {
    const dispatch = useDispatch();
    const userStatus = useSelector((state) => state.user.user);
    const token = userStatus.token;

    const [userData, setUserData] = useState("");

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    const getData = async (token) => {
        if (token) {
            try {
                const response = await axios({
                    method: "post",
                    url: "http://localhost:3001/api/v1/user/profile",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: "Bearer" + token,
                    },
                });
                setUserData(response.data.body);
            } catch ({ response }) {
                console.log(response);
            }
        }
    };

    useEffect(() => {
        getData(token);
    }, [token, userData]);

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                {userStatus.isAuthenticated === false ? (
                    <div>
                        <Link to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                ) : (
                    <div className="main-nav-content-item">
                        <Link to="/profile" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {userData.firstName}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={handleLogout}>
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
