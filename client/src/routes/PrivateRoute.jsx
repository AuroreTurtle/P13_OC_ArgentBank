import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const userAuth = useSelector((state) => state.user.user.isAuthenticated);

    if (!userAuth) {
        // User not logged in so redirect to signin page
        return <Navigate to="/signin" />;
    }

    // if user is logged in, we return child components
    return children;
}

export default PrivateRoute;
