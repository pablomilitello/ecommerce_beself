const products = [
  {
    id: 1,
    title: "Tratamiento Facial",
    category: "tratamientos",
    detail: "Mejora el cutis",
    price: 1500,
    url: "./images/imagen11.jpeg",
    stock: 4,
  },
  {
    id: 2,
    title: "Masajes faciales",
    category: "tratamientos",
    detail: "Anti stress",
    price: 1200,
    url: "./images/prueba3.jpg",
    stock: 7,
  },
  {
    id: 3,
    title: "Tratamiento acne",
    category: "tratamientos",
    detail: "Suavisa tu rostro",
    price: 1700,
    url: "./images/prueba2.jpg",
    stock: 5,
  },
];

const GetProducts = () => {
  return new Promise((resolve, reject) => {
    console.log("Conecting to backend.....");
    let error = false;
    setTimeout(() => {
      if (error) reject("Usuario no autorizado");
      else resolve(products);
    }, 2000);
  });
};

export default GetProducts;
