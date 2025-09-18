import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "./config";

// leer todos los productos (devuelve array con id (doc id) y data)
export const fetchProducts = async () => {
  const col = collection(db, "products");
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

// leer un producto por id (doc id string)
export const fetchProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
};

// crear orden (devuelve id doc)
export const createOrder = async (orderData) => {
  const ordersCol = collection(db, "orders");
  const docRef = await addDoc(ordersCol, orderData);
  return docRef.id;
};
