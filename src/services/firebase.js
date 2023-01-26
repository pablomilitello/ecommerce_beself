import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWTKFQNh4EU-m6GRMWA3V3Ccri7kv7PCM",
  authDomain: "beself-4b29a.firebaseapp.com",
  projectId: "beself-4b29a",
  storageBucket: "beself-4b29a.appspot.com",
  messagingSenderId: "750454070123",
  appId: "1:750454070123:web:4d8de6634a68dd4407ca2e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GetProducts() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  const productsDB = snapshot.docs.map((element) => {
    let product = element.data();
    product.id = element.id;
    return product;
  });
  return productsDB;
}

export async function GetProduct(idURL) {
  const productsRef = collection(db, "products");
  const docRef = doc(productsRef, idURL);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function GetProductByCategory(categoryURL) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryURL));
  const snapshot = await getDocs(q);
  const productsDB = snapshot.docs.map((element) => {
    let product = element.data();
    product.id = element.id;
    return product;
  });
  return productsDB;
}

export async function createOrder(order) {
  const orderRef = collection(db, "order");
  let anser = await addDoc(orderRef, order);
  return anser.id;
}

export default db;
