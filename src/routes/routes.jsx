import Home from "../views/Home"
import Register from "../views/Register"
import Login from "../views/Login"
import Cart from "../views/Cart"
import Pizza from "../views/Pizza"
import MainLayout from "../layouts/MainLayout"
import AuthLayout from "../layouts/AuthLayout"
import Profile from "../views/Profile"
import ProtectedRoutes from "./ProtectedRoutes"

const routes = [
    {
        path: '/',
        element:
            <MainLayout>
                <Home />
            </MainLayout>
    },
    {
        path: '/login',
        element:
            <AuthLayout>
                <Login />
            </AuthLayout>
    },
    {
        path: '/register',
        element:
            <AuthLayout>
                <Register />
            </AuthLayout>
    },
    {
        path: '/cart', element:
            <MainLayout>
                <Cart />
            </MainLayout>
    },
    {
        path: '/pizza/:id',
        element:
            <MainLayout>
                <Pizza />
            </MainLayout>
    },
    {
        path: '/profile',
        element:
            <ProtectedRoutes>
                <MainLayout>
                    <Profile />
                </MainLayout>
            </ProtectedRoutes>
    },
]

export default routes;