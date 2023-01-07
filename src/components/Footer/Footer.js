import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerConteiner">
      <p className="footerText">Copyright 2022 - BeSelf - Todos los derechos reservados</p>
      <p className="footerText">Seguinos en nuestras redes</p>
      <div>
        <Link to="https://instagram.com" className="footerText">
          <img src=" ../images/social/logo-linkedin.svg" className="footerImgSocialNetworks" alt="logo-linkedin" />
        </Link>
        <Link to="https://linkedin.com" className="footerText">
          <img src=" ../images/social/logo-instagram.svg" className="footerImgSocialNetworks" alt="logo-instagram" />
        </Link>
        <Link to="https://facebook.com" className="footerText">
          <img src="../images/social/logo-facebook.svg" className="footerImgSocialNetworks" alt="logo-facebook" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
