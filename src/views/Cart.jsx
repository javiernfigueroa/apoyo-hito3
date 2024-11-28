import { useState } from 'react'
import articles from '../data/data'

function Cart() {
    const initialCart = articles.slice(0, 3).map((pizza) => ({
        ...pizza,
        quantity: 1,
    }))

    const [cart, setCart] = useState(initialCart);

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0)
        )
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-8">Carrito de compras</h1>
            {cart.map((item) => (
                <div className='flex item-center p-4 mb-4' key={item.id}>
                    <img src={item.image} alt={item.name}
                        className='w-24 h-24 rounded' />
                    <div className='ml-4'>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>

                    <div className='flex space-x-2'>
                        <button onClick={() => decreaseQuantity(item.id)} className='bg-red-500 text-white px-3 py-1 rounded'>-</button>

                        <button onClick={() => increaseQuantity(item.id)} className='bg-blue-500 text-white px-3 py-1 rounded'>+</button>
                    </div>
                </div>
            ))}
            <div>
                <h3>Total: ${calculateTotal()}</h3>
                <button>Pagar</button>
            </div>
        </div>
    )
}



export default Cart