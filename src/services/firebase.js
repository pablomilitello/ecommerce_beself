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

export async function exportArrayProducts() {
  const products = [
    {
      title: "Peelling",
      category: "treatments",
      detail: "Exfoliación",
      bigDetail:
        "Tratamiento para dar mayor luminosidad a la piel, mejorar la permeabilidad de la empidermis logrando mejor aceptación de principios activos.",
      price: 1500,
      url: "../images/imagen11.jpeg",
      stock: 4,
      discount: 30,
    },
    {
      title: "Masajes faciales",
      category: "treatments",
      detail: "Anti age / DLM",
      bigDetail:
        "Masaje Anti age: Mejora el aspecto del cutis mediante una mayor estimulación de la circulación sanguinea la cual permite una mejor nutrición del tejido. Masaje DLM: Maniobras que permmiten drenar edema localizado y/o impurezas del tejido permitiendo una buena descongestión en las distintas zonas del rostro.",
      price: 1200,
      url: "../images/prueba3.jpg",
      stock: 7,
      discount: 0,
    },
    {
      title: "Radiofrecuencia",
      category: "treatments",
      detail: "Tratamiento anti age",
      bigDetail: "Tratamiento para reestructurar tejido mediante la estimulación de fibras colágenas.",
      price: 1700,
      url: "../images/prueba2.jpg",
      stock: 5,
      discount: 15,
    },

    {
      title: "Tratamiento exfoliante",
      category: "products",
      detail: "Crema exfoliante antiedad",
      bigDetail:
        "Crema exfoliante antiedad de uso facial y corporal, con vitamina C liposomal, retinol liposomal y exfoliante de carozo de damasco.",
      price: 1700,
      url: "../images/dermo/antiageCorporal_dermo.jpg",
      stock: 5,
      discount: 0,
    },

    {
      title: "Hidratación Termal",
      category: "products",
      detail: "Crema termal ligera",
      bigDetail:
        "Crema de Textura gel ultraliviana. Hidratación para pieles de normales a seborreicas o acnéicas. Contiene agua termal, soja activa de alta pureza, Calcio, Cobre, Manganeso, Selenio y Zinc.",
      price: 1700,
      url: "../images/dermo/hidratacionTermal_dermo.jpg",
      stock: 5,
      discount: 20,
    },

    {
      title: "Pore Refiner",
      category: "products",
      detail: "Poros dilatados",
      bigDetail:
        "Mejora imperfecciones y marcas de la piel. Regula el exceso de sebo y elimina el brillo. Posee una textura sedosa y de rápida absorción.",
      price: 1700,
      url: "../images/dermo/porosDilatados_dermo.jpg",
      stock: 5,
      discount: 0,
    },

    {
      title: "Vitamin C Cleanser",
      category: "products",
      detail: "Gel de limpieza",
      bigDetail:
        "Renovador facial y corporal. Contiene Liposomas de Vitamina C que dejan la piel suave y luminosa con una sensación refrescante conservado la hidratación natural. pH equilibrado.",
      price: 1700,
      url: "../images/dermo/vitaminaC_dermo.jpg",
      stock: 5,
      discount: 40,
    },

    {
      title: "Shock Mask",
      category: "products",
      detail: "Máscara con vitamina C",
      bigDetail:
        "Máscara de tela monodosis que produce revitalización instantánea y luminosidad extrema. Efecto relleno de arrugas. Para todo tipo de piel. Con vitamina C de extrema pureza, micro ácido hialurónico y trehalosa.",
      price: 1700,
      url: "../images/dermo/vitaminaCHyal_dermo.jpg",
      stock: 5,
      discount: 0,
    },
  ];

  for (let product of products) {
    addDoc(collection(db, "products"), product);
  }
}

export default db;
