import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { login } from "../../services/AuthApi";

function SignIn() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;

        // console.log(name, value);
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errorForm = document.querySelector(".error");

        try {
            const response = await login(user);
            console.log(response);
            navigate("/profile");
        } catch ({ response }) {
            console.log(response);
            // alert(response.data.message);
            errorForm.innerHTML = "Invalid email and/or password";
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
                        <input type="text" id="username" name="email" onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <Link to="/user" className="sign-in-button">
                        Sign In
                    </Link> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
