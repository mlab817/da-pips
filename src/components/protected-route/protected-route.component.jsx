import {useContext} from "react";
import {AuthContext} from "../../contexts/auth.context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const location = useLocation()

  console.log(`currentUser: ${JSON.stringify(currentUser)}`)

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />
}

export default ProtectedRoute