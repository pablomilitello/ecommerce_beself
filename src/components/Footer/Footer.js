import React from "react";

function Footer() {
  return (
    <footer className="footerConteiner">
      <p className="footerText">Copyright 2022 - BeSelf - Todos los derechos reservados</p>
      <p className="footerText">Seguinos en nuestras redes</p>
      <div>
        <a href="https://instagram.com" className="footerText">
          <img src=" ./images/social/logo-linkedin.svg" className="footerImgSocialNetworks" alt="logo-linkedin" />
        </a>
        <a href="https://linkedin.com" className="footerText">
          <img src=" ./images/social/logo-instagram.svg" className="footerImgSocialNetworks" alt="logo-instagram" />
        </a>
        <a href="https://facebook.com" className="footerText">
          <img src="./images/social/logo-facebook.svg" className="footerImgSocialNetworks" alt="logo-facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
