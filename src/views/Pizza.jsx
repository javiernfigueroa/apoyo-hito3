import { useParams } from "react-router-dom";
import useFetchPizzas from "../hooks/useFetchPizzas";

function Pizza() {
    const { id } = useParams() // leer, el id que se esta entregando desde la url
    const pizza = useFetchPizzas(`http://localhost:5000/api/pizzas/${id}`)

    if (!pizza) {
        return <div className="text-center mt-10">Cargando...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Detalles de la Pizza</h1>
            <div className="max-w-lg mx-auto border rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{pizza.name}</h2>
                <p className="text-gray-700 mb-4">{pizza.description}</p>
                <p className="text-lg font-semibold">Precio: ${pizza.price}</p>
                <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="w-full h-auto mt-4 rounded-lg"
                />
            </div>
        </div>
    );
}

export default Pizza;