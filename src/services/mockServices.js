const products = [
  {
    id: 1,
    title: "Peelling",
    category: "tratamientos",
    detail: "Exfoliación",
    detailTreatments:
      "Tratamiento para dar mayor luminosidad a la piel, mejorar la permeabilidad de la empidermis logrando mejor aceptación de principios activos",
    price: 1500,
    url: "../images/imagen11.jpeg",
    stock: 4,
  },
  {
    id: 2,
    title: "Masajes faciales",
    category: "tratamientos",
    detail: "Anti age / DLM",
    detailTreatments:
      "Masaje Anti age: Mejora el aspecto del cutis mediante una mayor estimulación de la circulación sanguinea la cual permite una mejor nutrición del tejido. Masaje DLM: Maniobras que permmiten drenar edema localizado y/o impurezas del tejido permitiendo una buena descongestión en las distintas zonas del rostro",
    price: 1200,
    url: "../images/prueba3.jpg",
    stock: 7,
  },
  {
    id: 3,
    title: "Radiofrecuencia",
    category: "tratamientos",
    detail: "Tratamiento anti age",
    detailTreatments: "Tratamiento para reestructurar tejido mediante la estimulación de fibras colágenas",
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
