import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <div>
      <h2>Pagina no encontrada</h2>
      <p>Te estamos redirigiendo...</p>
    </div>
  );
}

export default PageNotFound;
