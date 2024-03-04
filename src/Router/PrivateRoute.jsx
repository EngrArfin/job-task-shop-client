import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    return <Navigate to="login"></Navigate>
};

export default PrivateRoute;