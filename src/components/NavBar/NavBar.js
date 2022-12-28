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
      <div className="div__logo">
        <img className="logoBeSelf" src="/images/beSelfLogo.svg" alt="logoBeself" />
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
