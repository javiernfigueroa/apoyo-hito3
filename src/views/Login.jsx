import { useUser } from "../context/UserContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        navigate('/profile')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-center">Login</h1>
            <input
                className="border p-2 "
                placeholder="correo"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border p-2 mt-5 "
                placeholder="contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="border p-2 bg-blue-300 mt-2">Inicia Sesion</button>
            <p className="text-center">No tienes cuenta? registrate</p>
        </form>
    )
}

export default Login