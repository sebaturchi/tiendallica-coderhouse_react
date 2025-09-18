import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDWvh3v_Ameyt4ljMfDJkqZCSONrJAsZsM",

  authDomain: "tiendallica.firebaseapp.com",

  projectId: "tiendallica",

  storageBucket: "tiendallica.firebasestorage.app",

  messagingSenderId: "784758517919",

  appId: "1:784758517919:web:60686e2eef4e77a5d1b2aa",

  measurementId: "G-ZED7ZZE92P"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
