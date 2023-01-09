import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

function NavBar() {
  const linksNavBar = [
    { title: "Inicio", url: "/" },
    { title: "Nosotros", url: "/we" },
    { title: "Tratamientos", url: "/category/treatments" },
    { title: "Productos", url: "/category/products" },
    { title: "Contacto", url: "/contact" },
  ];

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
      <CartWidget />
    </header>
  );
}

export default NavBar;
