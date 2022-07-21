import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Navigate, Outlet } from 'react-router-dom'

const UnprotectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  console.log(`currentUser: ${JSON.stringify(currentUser)}`)

  if (currentUser) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default UnprotectedRoute