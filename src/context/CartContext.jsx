import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {

        const existingPizza = cart.find((item) => item.id === pizza.id)
        if (existingPizza) {
            setCart(cart.map((item) =>
                item.id === pizza.id ? { ...item, count: item.count + 1 } : item
            ))
        } else {
            setCart([...cart, { ...pizza, count: 1 }])
        }
    }

    const handleIncrement = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCart(updatedCart);
    };

    const handleDecrement = (id) => {
        const pizza = cart.find((item) => item.id === id);

        if (pizza.count === 1) {
            const confirmDelete = window.confirm("¿Seguro que quieres eliminar esta pizza del carrito?");
            if (confirmDelete) {
                setCart(cart.filter((item) => item.id !== id));
            }
        } else {
            const updatedCart = cart.map((item) =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            );
            setCart(updatedCart);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.count, 0);
    };


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, calculateTotal, handleDecrement, handleIncrement }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)