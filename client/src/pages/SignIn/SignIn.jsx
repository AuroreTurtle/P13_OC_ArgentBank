import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/AuthApi";
import { loginUser } from "../../feature/user.slice";
import "./SignIn.css";

import { addItemSession, addItem } from "../../services/Storage";

function SignIn() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        // console.log(name, value);
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errorForm = document.querySelector(".error");

        try {
            const response = await login(user).then((token) => {
                if (rememberMe) {
                    addItem("userToken", token);
                    return token;
                } else {
                    addItemSession("userToken", token);
                    return token;
                }
            });
            dispatch(loginUser({ token: response, isAuthenticated: true }));
            navigate("/profile");
        } catch ({ response }) {
            console.log(response);
            if (response.data.status === 400) {
                errorForm.innerHTML = "Invalid email and/or password";
            }
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="error"></div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="email" onChange={handleChange} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} required />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            onClick={() => {
                                setRememberMe((current) => !current);
                            }}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
