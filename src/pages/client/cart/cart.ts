import { obtenerCartItems, calcularTotal } from "../../../utils/cart";

export function cargarCarrito(): void {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const items = obtenerCartItems();

    if (items.length === 0) {
        contenedorCarrito!.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        contenedorCarrito!.innerHTML = "";

        items.forEach((item) => {
            const article = document.createElement("article");
            article.classList.add("producto-card");
            article.innerHTML = `
                <h3>${item.product.name}</h3>
                <p>Precio: $${item.product.price}</p>
                <p>Cantidad: ${item.amount}</p>
            `;

            contenedorCarrito?.appendChild(article);
        });
    }

    const total = calcularTotal();
    totalCarrito!.innerHTML = `Total: $${total}`;
}

cargarCarrito();