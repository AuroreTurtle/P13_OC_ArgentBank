import { useState } from "react";
import "./Profile.css";
import Account from "../../components/Account/Account";

function Profile() {
    const [editOn, setEditOn] = useState(false);

    const toggleEdit = () => {
        setEditOn((current) => !current);
    };

    return (
        <main className={editOn ? "main bg-light" : "main bg-dark"}>
            {editOn ? (
                <div className="header">
                    <h1 className="edit-title">Welcome back</h1>
                    <form className="edit-profile">
                        <input className="edit-profile-input" type="text" placeholder="Tony" />
                        <input className="edit-profile-input" type="text" placeholder="Jarvis" />
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
                        Tony Jarvis!
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
