import "./Error.css";

function Error() {
    return (
        <main className="main bg-dark">
            <div id="error">
                <span>404</span>
                <p id="error-text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
        </main>
    );
}

export default Error;
