import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWTKFQNh4EU-m6GRMWA3V3Ccri7kv7PCM",
  authDomain: "beself-4b29a.firebaseapp.com",
  projectId: "beself-4b29a",
  storageBucket: "beself-4b29a.appspot.com",
  messagingSenderId: "750454070123",
  appId: "1:750454070123:web:4d8de6634a68dd4407ca2e",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export async function obtenerProductos() {
//   const productsRef = collection(db, "products");
//   const snapshot = awaitgetDocs(productsRef);
//   const producto = snapshot.docs.map((elem) => elem.data());
//   return producto;
// }

export default app;
