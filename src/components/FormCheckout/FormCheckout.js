import React, { useState } from "react";
import Button from "../Button/Button";
import "./formCheckout.scss";

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

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    newState[inputName] = value;
    setUserData(newState);
  }

  function onSubmit(evt) {
    evt.preventDefault();
  }

  function formIsInvalid() {
    return !(userData.Nombre !== "" && userData.Telefono !== "" && userData.Email !== "");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h4 className="formText">Ya casi es tuyo...</h4>
      <h4 className="formText">Llena tus datos para finalizar la compra.</h4>
      {fieldsForm.map((field) => (
        <InputForm value={userData[field]} name={field} onChange={onInputChange} label={field} userData={userData} />
      ))}
      <div className="divButtons">
        <Button color="red" text="Crear orden" onClick={FormCheckout} type="submit" />

        <button className="formButton" onClick={() => setUserData({ Nombre: "", Teléfono: "", Email: "" })}>
          Limpiar formulario
        </button>
      </div>
    </form>
  );
}
