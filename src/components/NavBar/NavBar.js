import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Button from "../Button/Button.js";

function NavBar() {
  const linksNavBar = [
    { title: "Inicio", url: "/" },
    { title: "Nosotros", url: "/we" },
    { title: "Tratamientos", url: "/category/treatments" },
    { title: "Productos", url: "/category/products" },
    { title: "Contacto", url: "/contact" },
  ];

  function LoginSession() {}

  return (
    <header className="header">
      <Link to="/" className="contenedorLogo">
        <div className="divLogo">
          <img className="logoSVGBeSelf" src="/images/beSelfTypographyBlue.svg" alt="logoBeself" />
        </div>
        <h2 className="logoDescription">ESTÉTICA CORPORAL Y FACIAL</h2>
      </Link>

      <nav className="navBar">
        <ul className="unList">
          <li>
            {linksNavBar.map((element) => (
              <Link key={element.url} to={element.url} className="linkNav">
                {element.title}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
      <Button onClick={LoginSession} color="#F0C808" padding="10px 20px" text="Login" />
      <CartWidget />
    </header>
  );
}

export default NavBar;
