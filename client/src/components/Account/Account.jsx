import "./Account.css";

/**
 * It returns React Component that displays a title, amount, description, and color.
 * @returns A React component.
 */
function Account({ title, amount, description, color }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className={color}>View transactions</button>
            </div>
        </section>
    );
}

export default Account;
