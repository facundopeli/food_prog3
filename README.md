# Food Store

🔗 **Demo online:** https://food-store-facundo.vercel.app
Para probarlo, registrate como cliente y después iniciá sesión.

LINK VIDEO: https://drive.google.com/file/d/1hD0hS3ITaaM6wcvPfiXqW44_Ux-RLtg1/view?usp=sharing

Aplicación frontend desarrollada con HTML5, CSS3, JavaScript y TypeScript para la materia Programación III (Tecnicatura Universitaria en Programación, UTN). El proyecto evoluciona el catálogo estático original hacia una aplicación dinámica e interactiva, incorporando autenticación con roles (Trabajo Práctico Integrador) y, en esta entrega (Evaluación 1), un catálogo con búsqueda y filtrado por categoría, más un carrito de compras persistido en `localStorage`.

## Funcionalidades

- **Catálogo de productos**: renderizado dinámico desde `src/data/data.ts`.
- **Búsqueda por nombre**: filtra el catálogo a medida que se escribe.
- **Filtro por categoría**: desde el menú lateral, con opción "Todas" para volver a ver el catálogo completo.
- **Carrito de compras**: agregar productos desde el catálogo, visualizar los ítems (nombre, precio, cantidad) y el total de la compra. Los datos se persisten en `localStorage` bajo la clave `"cart"`.
- **Registro y login de usuarios**: persistidos en `localStorage` (`"users"` y `"userData"`), con protección de rutas según el rol (`admin` / `client`).

## Tecnologías

- HTML5, CSS3, TypeScript
- [Vite](https://vitejs.dev/) como bundler y servidor de desarrollo
- Sin frameworks (React, Angular, etc.)
- Gestor de paquetes: [pnpm](https://pnpm.io/)

## Cómo ejecutarlo

1. Clonar o descomprimir el proyecto.
2. Instalar dependencias:

   ```bash
   pnpm install
   ```

   Si no tenés `pnpm` instalado, habilitalo con:

   ```bash
   corepack enable pnpm
   ```

3. Levantar el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

4. Abrir en el navegador `http://localhost:5173/`. Desde ahí podés navegar a:
   - `src/pages/auth/registro/registro.html` — registro de usuario
   - `src/pages/auth/login/login.html` — inicio de sesión
   - `src/pages/client/home/home.html` — catálogo (búsqueda y filtro por categoría)
   - `src/pages/client/cart/cart.html` — carrito de compras

## Estructura del proyecto

```
src/
├── pages/
│   ├── auth/          → registro y login
│   ├── admin/          → panel de administración
│   └── client/
│       ├── home/       → catálogo de productos (home.html, home.ts)
│       └── cart/        → vista del carrito (cart.html, cart.ts)
├── types/               → interfaces (IProduct, ICartItem, ICategoria, IUser)
├── data/                → datos de productos y categorías (data.ts)
└── utils/               → lógica de carrito y usuarios sobre localStorage
```

## Notas

En esta instancia no se evalúa la protección de rutas ni la conexión con backend — el foco está en la lógica frontend y la interacción con el usuario (catálogo, búsqueda, filtros y carrito).
