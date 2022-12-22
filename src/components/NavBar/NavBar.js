import CartWidget from "../CartWidget/CartWidget.js";

function NavBar() {
  return (
    <header className="header">
      <div className="div__logo">
        <img className="logoBeSelf" src="/images/beSelfLogo.svg" alt="logoBeself" />
      </div>
      <nav className="navBar">
        <ul className="unList">
          <li>
            <a href="/" className="linkNav">
              Inicio
            </a>
          </li>
          <li>
            <a href="/" className="linkNav">
              Nosotros
            </a>
          </li>
          <li>
            <a href="/" className="linkNav">
              Tratamientos
            </a>
          </li>
          <li>
            <a href="/" className="linkNav">
              Productos
            </a>
          </li>
          <li>
            <a href="/" className="linkNav">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
