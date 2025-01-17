import { useEffect } from "react"
import { useUser } from "../context/UserContext"

const Profile = () => {

    const { getProfile, userData, logout } = useUser()

    useEffect(() => {
        getProfile()
    }, [getProfile])

    return (
        <div>
            <h1>Perfil</h1>
            <p>Mail: {userData.email}</p>
            <button onClick={logout} className="bg-red-300 border p-2">Logout</button>
        </div>
    )
}

export default Profile