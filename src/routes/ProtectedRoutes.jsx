import { useUser } from "../context/UserContext"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {

    const { token } = useUser()

    if (!token) {
        return <Navigate to='/login' />
    }

    return children
}

export default ProtectedRoutes