import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import "./formCheckout.scss";
import { createOrder } from "../../services/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";

function InputForm(props) {
  return (
    <div className="formContainer">
      <label className="formLabel">{props.label}</label>
      <input className="formInput" value={props.value} name={props.name} type="text" onChange={props.onChange} />
    </div>
  );
}

export default function FormCheckout() {
  const [userData, setUserData] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
  });

  let fieldsForm = Object.keys(userData);

  const navigate = useNavigate();
  const { clearCart, getTotalPriceInCart, cart } = useContext(cartContext);

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    newState[inputName] = value;
    setUserData(newState);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    if (userData.Nombre !== "" && userData.Telefono !== "" && userData.Email !== "") {
      handleCheckout();
    } else {
      Swal.fire({
        title: "Error",
        text: `Todos los campos son requeridos para finalizar la compra`,
        imageUrl: "../images/beSelfMarca.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Logo BeSelf",
      });
    }
  }

  function handleCheckout() {
    const items = cart.map((item) => ({
      id: item.id,
      price: item.price,
      count: item.count,
      title: item.title,
      key: item.id,
    }));

    let order = {
      buyer: userData,
      items: items,
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    createOrder(order).then((id, count) => {
      Swal.fire({
        title: "Felicitaciones por tu compra!!!",
        text: `Tu ID es ${id}`,
        imageUrl: "../images/beSelfMarca.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Logo BeSelf",
      }).then(() => {
        clearCart();
        navigate("/");
      });
    });
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h4 className="formText">Ya casi es tuyo...</h4>
      <h4 className="formText">Llena tus datos para finalizar la compra.</h4>
      {fieldsForm.map((field, index) => (
        <InputForm
          key={index}
          value={userData[field]}
          name={field}
          onChange={onInputChange}
          label={field}
          userData={userData}
        />
      ))}
      <div className="divButtons">
        <Button color="red" text="Crear orden" type="submit" />
        <button className="formButton" onClick={() => setUserData({ Nombre: "", Teléfono: "", Email: "" })}>
          Limpiar formulario
        </button>
      </div>
    </form>
  );
}
