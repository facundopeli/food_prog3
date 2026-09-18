import { getCategories, PRODUCTS } from "../../../data/data";
import type { IProduct } from "../../../types/product";
import { agregarAlCarrito } from "../../../utils/cart";

const listaCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("contenedor-productos");

const cargarProductos = (lista: IProduct[]) => {
    contenedorProductos!.innerHTML = "";

    if (lista.length === 0) {
        contenedorProductos!.innerHTML = "<p>No se encontraron productos.</p>";
    } else {
        lista.forEach((product) => {
            const article = document.createElement("article");
            article.classList.add("producto-card");
            article.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
                <button>Agregar</button>
            `;

            const boton = article.querySelector("button");
            boton?.addEventListener("click", () => {
                agregarAlCarrito(product);
                alert(`Agregaste: ${product.name}`);
            });

            contenedorProductos?.appendChild(article);
        });
    }
};

const cargarCategorias = () => {
    const liTodas = document.createElement('li');
    liTodas.innerHTML = `<a href="#">Todas</a>`;
    liTodas.querySelector("a")?.addEventListener("click", (event) => {
        event.preventDefault();
        cargarProductos(PRODUCTS);
    });
    listaCategorias?.appendChild(liTodas);

    getCategories().forEach((category) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${category.name}</a>`;

        li.querySelector("a")?.addEventListener("click", (event) => {
            event.preventDefault();
            const nuevaLista = PRODUCTS.filter((product) => product.category === category.name);
            cargarProductos(nuevaLista);
        });

        listaCategorias?.appendChild(li);
    });
};

cargarCategorias();
cargarProductos(PRODUCTS);

const formulario = document.querySelector("form");
formulario?.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = (document.getElementById("buscador") as HTMLInputElement).value;

    const filtrados = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(texto.toLowerCase())
    );

    cargarProductos(filtrados);
});
