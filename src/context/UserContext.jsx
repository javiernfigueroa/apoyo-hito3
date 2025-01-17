import { createContext, useContext, useState } from "react";

// crear el contexto
const UserContext = createContext()

// crear el provicder
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') || null)
    const [email, setEmail] = useState('')
    const [userData, setUserData] = useState({})

    // metodo para registrar usuarios / una operacion asyc devuelve una promise
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if (response.ok) { // la respuesta este en el rango de 200 - 299 , osea una respuesta exitosa, y esto devuelve bool
                alert('Usuario registrado con exito')
            } else {
                const error = await response.json()
                alert('Error al registrar', error)
            }
        } catch (error) {
            console.error('Error al registrar', error)
        }
    }

    // metodo para loguear usuarios

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (response.ok) { // la respuesta este en el rango de 200 - 299 , osea una respuesta exitosa, y esto devuelve bool
                setToken(data.token)
                setEmail(data.email)
                localStorage.setItem('token', data.token)
                alert('Login exitoso')
            } else {
                const error = await response.json()
                alert('Error al hacer login', error)
            }
        } catch (error) {
            console.error('Error al login', error)
        }
    }

    // metodo para extraer el payload del token y con esto mostrar data en el perfil

    const getProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })

            if (response.ok) {
                const data = await response.json()
                setUserData(data)
            } else {
                const error = await response.json()
                alert('Error', error)
            }
        } catch (error) {
            console.error('Error', error)
        }
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        setEmail('')
    }

    return (
        <UserContext.Provider value={{ token, setToken, logout, register, email, login, getProfile, userData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)