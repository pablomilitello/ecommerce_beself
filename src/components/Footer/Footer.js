import React from "react";

function Footer() {
  return (
    <footer className="footerConteiner">
      <p class="footer__text">Copyright 2022 - BeSelf - Todos los derechos reservados</p>
      <p class="footer__text">
        Seguinos en nuestras <b>redes</b>
      </p>
      <div>
        <a href="https://instagram.com" class="footer__text">
          <img src=" ./images/social/logo-linkedin.svg" class="footer-img-social_networks" alt="logo-linkedin" />
        </a>
        <a href="https://linkedin.com" class="footer__text">
          <img src=" ./images/social/logo-instagram.svg" class="footer-img-social_networks" alt="logo-instagram" />
        </a>
        <a href="https://facebook.com" class="footer__text">
          <img src="./images/social/logo-facebook.svg" class="footer-img-social_networks" alt="logo-facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
