import bgImage from '../assets/imgs/bg-pizzeria.jpg';

const Header = () => {
    return (
        <header
            className="relative bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative text-center text-white">
                <h1 className="text-4xl font-bold">¡Pizzería Mamma Mia!</h1>
                <p className="text-lg mt-2">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </header>
    );
};

export default Header;
