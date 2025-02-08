import { Navigate, useParams } from "react-router-dom";

export default function RequireAuth(Component) {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
        return <Navigate to="/authentication/sign-in" replace />;
    }

    return <Component {...props} />;
}
