import React from "react";
import Button from "../components/Button/Button";
import "./contacto.scss";

function Contacto() {
  return (
    <>
      <section>
        <h3 className="section__h3__contact">Contacto</h3>
        <p className="text__contact">Nos pondremos en contacto contigo a la brevedad</p>
      </section>
      <form className="contact">
        <div className="div__form__contact">
          <input type="text" name="Nombre" className="field" placeholder="Nombre:" />
          <input type="text" name="Apellido" className="field" placeholder="Apellido:" />
          <input type="email" name="email" className="field" placeholder="Email:" />
          <input type="tel" name="Teléfono" className="field" placeholder="Teléfono:" />
          <textarea
            name="comentario"
            className="textarea__text field"
            placeholder="Dejanos tu consulta aquí:"></textarea>
          <Button color="#F0C808" text="Enviar Datos" padding="10px 20px" />
        </div>
      </form>
    </>
  );
}

export default Contacto;
