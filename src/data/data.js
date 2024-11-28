import pizzaImage from "../assets/imgs/pizza.jpg"; // Importamos la imagen desde la ruta especificada

const articles = [
  {
    id: 1,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    image: pizzaImage, // Ruta a la imagen
  },
  {
    id: 2,
    name: "Margarita",
    price: 5750,
    ingredients: ["mozzarella", "salsa de tomate", "albahaca fresca"],
    image: pizzaImage,
  },
  {
    id: 3,
    name: "Cuatro Quesos",
    price: 7500,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    image: pizzaImage,
  },
  {
    id: 4,
    name: "Hawaiana",
    price: 6850,
    ingredients: ["mozzarella", "salsa de tomate", "piña", "jamón"],
    image: pizzaImage,
  },
  {
    id: 5,
    name: "Pepperoni",
    price: 7200,
    ingredients: ["mozzarella", "salsa de tomate", "pepperoni"],
    image: pizzaImage,
  },
  {
    id: 6,
    name: "Vegetariana",
    price: 6450,
    ingredients: ["mozzarella", "salsa de tomate", "pimientos", "cebolla", "champiñones"],
    image: pizzaImage,
  },
  {
    id: 7,
    name: "Barbacoa",
    price: 7900,
    ingredients: ["mozzarella", "salsa barbacoa", "pollo", "cebolla caramelizada"],
    image: pizzaImage,
  },
  {
    id: 8,
    name: "Carbonara",
    price: 8100,
    ingredients: ["mozzarella", "salsa carbonara", "tocino", "cebolla"],
    image: pizzaImage,
  },
  {
    id: 9,
    name: "Caprese",
    price: 6800,
    ingredients: ["mozzarella", "salsa de tomate", "albahaca", "tomate fresco"],
    image: pizzaImage,
  },
  {
    id: 10,
    name: "Picante",
    price: 7300,
    ingredients: ["mozzarella", "salsa de tomate", "chorizo", "jalapeños"],
    image: pizzaImage,
  },
];

export default articles;
