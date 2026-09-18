import type { IProduct, ICartItem } from "../types/product";

export function guardarCartItems(cartItems: ICartItem[]): void {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

export function obtenerCartItems(): ICartItem[] {
    const datos = localStorage.getItem("cart");
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
}

export function agregarAlCarrito(producto: IProduct): void {
    const cartItems = obtenerCartItems();

    const itemExistente = cartItems.find((item) => item.product.id === producto.id);

    if (itemExistente) {
        itemExistente.amount++;
    } else {
        cartItems.push({ product: producto, amount: 1 });
    }
    guardarCartItems(cartItems);
}

export function actualizarCantidad(productId: number, nuevaCantidad: number): void {
    const cartItems = obtenerCartItems();

    const itemExistente = cartItems.find((item) => item.product.id === productId);

    if (itemExistente) {
        itemExistente.amount = nuevaCantidad;
    }
    guardarCartItems(cartItems);
}

export function calcularTotal(): number {
    const cartItems = obtenerCartItems();

    let total = 0;

    cartItems.forEach((item) => {
        total += item.product.price * item.amount;
    });

    return total;
}
