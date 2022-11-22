import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/AuthApi";
import { logoutUser } from "../../feature/user.slice";
import "./Header.css";
import Logo from "../../assets/argentBankLogo.png";

function Header() {
    const dispatch = useDispatch();
    const userStatus = useSelector((state) => state.user.user);
    const token = userStatus.token;

    const [userData, setUserData] = useState("");

    //Problème obligé de rafraichir page pour être déconnecté vraiment
    const handleLogout = () => {
        dispatch(logoutUser());
        logout();
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
        } else {
            console.log("No token");
        }
    };

    useEffect(() => {
        getData(token);
    }, [token]);

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                {userStatus.isAuthenticated === false ? (
                    <div>
                        <Link to="/signin" className="main-nav-item">
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
