import { Navigate } from 'react-router-dom';
import getCookie from '../utils/HelperFunctions';

const ProtectedRoute = ({ children }) => {
    const userToken = getCookie("userToken");

    if (userToken === 'none' || userToken === undefined) {
        alert("You need to login first")
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;