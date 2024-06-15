import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../pages/User/hook/useAdmin";
import useAuth from "../pages/User/hook/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <process className="progress w-56"></process>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
