# Tiendallica

Aplicación de e-commerce para instrumentos musicales desarrollada en **React**.  
Permite navegar por categorías, ver el detalle de cada producto y realizar compras con persistencia en **Firebase Firestore**.

## Características

- **Listado y detalle de productos**  
  - `ItemListContainer` obtiene productos desde **Firestore**.  
  - `ItemDetailContainer` muestra la información completa de cada ítem.

- **Carrito de compras con Context API**  
  - Componente `Cart` para ver productos, cantidades, subtotales y total.  
  - `CartWidget` muestra la cantidad de unidades en el ícono del carrito.

- **Selección de cantidad**  
  - `ItemCount` valida stock, cantidad mínima y permite agregar al carrito.

- **Navegación SPA**  
  - React Router para moverse entre inicio, categorías, detalle, carrito y checkout sin recargar la página.

- **Firebase**  
  - Productos almacenados en **Cloud Firestore**.  
  - Generación de órdenes de compra al confirmar el checkout.

- **Experiencia de usuario**  
  - Loaders mientras se consultan datos.  
  - Mensajes condicionales como “Carrito vacío” o “Producto sin stock”.  
  - Al finalizar la compra se muestra el **ID de la orden** generada en Firestore.

## Tecnologías

- **React 18**  
- **React Router DOM 6**  
- **Context API**  
- **Firebase / Firestore**  
- **Bootstrap 5** (estilos y componentes UI)


## Configuración rápida

1. **Clonar el repositorio**  
   bash
   git clone https://github.com/sebaturchi/tiendallica-coderhouse_react.git
   cd tiendallica-coderhouse_react

2. **Instalar dependencias**

    npm install

3. **Configurar Firebase**

    Crear un proyecto en Firebase Console

    Copiar las credenciales en src/firebase/config.js

    npm start

    La app se abrirá en http://localhost:3000