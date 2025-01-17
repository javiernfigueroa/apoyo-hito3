import { useState } from "react";
import { FaHome, FaSignInAlt, FaUserPlus, FaUser, FaLock, FaShoppingCart, FaBars } from "react-icons/fa";
import { formatCurrency } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { token, logout } = useUser()
    const { calculateTotal } = useCart()

    return (
        <nav className="bg-white text-black px-4 py-2 flex justify-between items-center relative">
            <div className="flex items-center justify-between w-full sm:w-auto">
                <h1 className="text-lg font-bold">Pizzería Mamma Mia!</h1>
                <button
                    className="sm:hidden text-gray-600 hover:text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars size={24} />
                </button>
            </div>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } absolute top-14 left-0 w-full bg-white sm:relative sm:top-auto sm:left-auto sm:w-auto sm:flex sm:space-x-4 sm:bg-transparent p-4 sm:p-0 z-10`}
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <Link to='/' className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    {token ? (
                        <>
                            <Link to='/profile' className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                                <FaUser />
                                <span>Profile</span>
                            </Link>
                            <button onClick={() => logout()} className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                                <FaLock />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                                <FaSignInAlt />
                                <span>Login</span>
                            </Link>
                            <Link to='/register' className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                                <FaUserPlus />
                                <span>Register</span>
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <FaShoppingCart />
                    <Link to='/cart' className="text-teal-400 font-bold px-3 py-2 bg-gray-200 rounded hover:bg-gray-600">
                        Total: ${formatCurrency(calculateTotal())}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
