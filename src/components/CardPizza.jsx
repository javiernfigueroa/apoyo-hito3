/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { formatCurrency } from "../utils/helpers"; // Asegúrate de tener la función de formato

const CardPizza = ({ pizza }) => {
    return (
        <div className="bg-white rounded shadow-md p-4 hover:shadow-lg transition-shadow">
            <img
                src={pizza.image} // Cada pizza puede tener una propiedad "image"
                alt={pizza.name}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{pizza.name}</h2>
            <p className="text-gray-600 mt-1">Ingredientes:</p>
            <p className="text-gray-500 flex items-center">
                🍕 {pizza.ingredients.join(", ")}
            </p>
            <p className="text-lg font-bold mt-2">Precio: ${formatCurrency(pizza.price)}</p>
            <div className="flex justify-between mt-4">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                    Ver Más 👀
                </button>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center">
                    Añadir <FaShoppingCart className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default CardPizza;