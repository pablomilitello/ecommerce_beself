import CartWidget from "../CartWidget/CartWidget.js";

function NavBar() {
  const linksNavBar = [
    { title: "Inicio", url: "/Inicio" },
    { title: "Nosotros", url: "/Nosotros" },
    { title: "Tratamientos", url: "/Tratamientos" },
    { title: "Productos", url: "/Productos" },
    { title: "Contacto", url: "/Contacto" },
  ];

  return (
    <header className="header">
      <div className="contenedorLogo">
        <div className="divLogo">
          <img className="logoSVGBeSelf" src="/images/beSelfTypographyBlue.svg" alt="logoBeself" />
        </div>
        <h2 className="logoDescription">ESTÉTICA CORPORAL Y FACIAL</h2>
      </div>
      <nav className="navBar">
        <ul className="unList">
          <li>
            {linksNavBar.map((element) => (
              <a key={element.url} href={element.url} className="linkNav">
                {element.title}
              </a>
            ))}
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
