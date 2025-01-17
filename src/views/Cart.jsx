import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Cart() {

    const { cart, handleDecrement, handleIncrement, calculateTotal } = useCart()
    const { token } = useUser()

    return (
        <div className="flex flex-col justify-center items-center border-spacing-2">
            <h1 className="text-2xl font-semibold text-center mb-8">Carrito de compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div
                        className="flex items-center p-4 mb-4 border w-[400px] justify-between"
                        key={item.id}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-24 h-24 rounded"
                        />
                        <div className="ml-4">
                            <h2>{item.name}</h2>
                            <p>${item.price.toLocaleString()}</p>
                            <p>Cantidad: {item.count}</p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleDecrement(item.id)}
                                className="bg-red-500 text-white p-2 w-[24px] rounded"
                            >
                                -
                            </button>
                            <button
                                onClick={() => handleIncrement(item.id)}
                                className="bg-blue-500 text-white p-2 w-[24px] rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Total: ${calculateTotal().toLocaleString()}</h3>
                    <button
                        disabled={token}
                        className={`text-white p-4 rounded mt-2 ${token ? "bg-green-500" : "bg-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Pagar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
