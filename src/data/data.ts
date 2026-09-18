import type { IProduct } from "../types/product";
import type { ICategoria } from "../types/categoria";

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        name: "Hamburguesa Triple",
        description: "Triple carne, cheddar y bacon",
        price: 15000,
        image: "/src/assets/burga.jpg",
        category: "Hamburguesas"
    },
    {
        id: 2,
        name: "Pizza Muzzarella",
        description: "Salsa casera y orégano",
        price: 15000,
        image: "/src/assets/pizza.jpg",
        category: "Pizzas"
    },
    {
        id: 3,
        name: "Coca Cola",
        description: "Bebida gaseosa fría",
        price: 5000,
        image: "/src/assets/coca.jpg",
        category: "Bebidas"
    },
    {
        id: 4,
        name: "Papas fritas",
        description: "Papa freída en aceite",
        price: 4000,
        image: "/src/assets/papas.jpg",
        category: "Papas Fritas"
    }
];

export function getCategories(): ICategoria[] {
    const nombresCategorias = PRODUCTS.map((producto) => producto.category);
    const categoriasUnicas = [...new Set(nombresCategorias)];
    const categorias: ICategoria[] = categoriasUnicas.map((nombre, index) => ({
        id: index + 1,
        name: nombre,
    }));
    return categorias;
}