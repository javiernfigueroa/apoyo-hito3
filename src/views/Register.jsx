import { useUser } from "../context/UserContext"
import { useState } from "react"

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log('el correo escrito es:', email);
    // console.log('la password escrita es:', password);
    const { register } = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-center">Registro</h1>
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
            <button type="submit" className="border p-2 bg-blue-300 mt-2">Registrarse</button>
            <p className="text-center">Ya tienes cuenta? inicia sesion</p>
        </form>
    )
}

export default Register