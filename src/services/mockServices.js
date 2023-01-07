const products = [
  {
    id: 1,
    title: "Tratamiento Facial",
    category: "tratamientos",
    detail: "Mejora el cutis",
    price: 1500,
    url: "../images/imagen11.jpeg",
    stock: 4,
  },
  {
    id: 2,
    title: "Masajes faciales",
    category: "tratamientos",
    detail: "Anti stress",
    price: 1200,
    url: "../images/prueba3.jpg",
    stock: 7,
  },
  {
    id: 3,
    title: "Tratamiento acne",
    category: "tratamientos",
    detail: "Suavisa tu rostro",
    price: 1700,
    url: "../images/prueba2.jpg",
    stock: 5,
  },

  {
    id: 4,
    title: "Tratamiento acne",
    category: "cremas",
    detail: "Crema antiage corporal",
    price: 1700,
    url: "../images/dermo/antiageCorporal_dermo.jpg",
    stock: 5,
  },

  {
    id: 5,
    title: "Tratamiento acne",
    category: "cremas",
    detail: "Hidratación Termal",
    price: 1700,
    url: "../images/dermo/hidratacionTermal_dermo.jpg",
    stock: 5,
  },

  {
    id: 6,
    title: "Tratamiento acne",
    category: "cremas",
    detail: "Poros dilatados",
    price: 1700,
    url: "../images/dermo/porosDilatados_dermo.jpg",
    stock: 5,
  },

  {
    id: 7,
    title: "Tratamiento acne",
    category: "cremas",
    detail: "Crema con vitamina C",
    price: 1700,
    url: "../images/dermo/vitaminaC_dermo.jpg",
    stock: 5,
  },

  {
    id: 8,
    title: "Tratamiento acne",
    category: "cremas",
    detail: "Crema con vitamina C Hyal",
    price: 1700,
    url: "../images/dermo/vitaminaCHyal_dermo.jpg",
    stock: 5,
  },
];

const GetProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) reject("Usuario no autorizado");
      else resolve(products);
    }, 2000);
  });
};

const GetProduct = (idURL) => {
  return new Promise((resolve) => {
    const requestItem = products.find((item) => {
      return item.id === Number(idURL);
    });
    setTimeout(() => {
      resolve(requestItem);
    }, 2000);
  });
};

export default GetProducts;

export { GetProduct };
