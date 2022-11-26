import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import Account from "../../components/Account/Account";

/**
 * It returns React Component that displays the profile page.
 * @returns A React component.
 */
function Profile() {
    const token = useSelector((state) => state.user.user.token);

    const [userData, setUserData] = useState("");
    const [userName, setUserName] = useState({
        firstName: "",
        lastName: "",
    });
    const [editOn, setEditOn] = useState(false);

    const toggleEdit = () => {
        setEditOn((current) => !current);
    };

    const getData = async (token) => {
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
    };

    // To edit the first and last name
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUserName({ ...userName, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put("http://localhost:3001/api/v1/user/profile", userName, {
                headers: { "Content-type": "application/json; charset=UTF-8", Authorization: "Bearer" + token },
            });
            setUserData(response.data.body);
            toggleEdit();
        } catch ({ response }) {
            console.log(response);
        }
    };

    useEffect(() => {
        getData(token);
    }, [token]);

    return (
        <main className={editOn ? "main bg-light" : "main bg-dark"}>
            {editOn ? (
                <div className="header">
                    <h1 className="edit-title">Welcome back</h1>
                    <form className="edit-profile" onSubmit={handleSubmit}>
                        <input
                            className="edit-profile-input"
                            type="text"
                            name="firstName"
                            placeholder={userData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="edit-profile-input"
                            type="text"
                            name="lastName"
                            placeholder={userData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <button className="edit-profile-button" type="submit">
                            Save
                        </button>
                        <button className="edit-profile-button" onClick={toggleEdit}>
                            Cancel
                        </button>
                    </form>
                </div>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {userData.firstName} {userData.lastName}!
                    </h1>
                    <button className="edit-button" onClick={toggleEdit}>
                        Edit Name
                    </button>
                </div>
            )}

            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
                color={
                    editOn
                        ? "transaction-button transaction-button-purple"
                        : "transaction-button transaction-button-green"
                }
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
                color={
                    editOn
                        ? "transaction-button transaction-button-purple"
                        : "transaction-button transaction-button-green"
                }
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
                color={
                    editOn
                        ? "transaction-button transaction-button-purple"
                        : "transaction-button transaction-button-green"
                }
            />
        </main>
    );
}

export default Profile;
