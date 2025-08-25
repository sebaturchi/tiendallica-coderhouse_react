import productos from "./productos.json";

const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productos && productos.length > 0) {
        resolve(productos);
      } else {
        reject("No se encontraron productos");
      }
    }, 1000);
  });
};

export default getProductos;
