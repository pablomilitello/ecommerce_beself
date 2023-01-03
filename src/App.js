import "./styles/App.scss";
import "../src/components/CartWidget/cartwidget.scss";
import "../src/components/NavBar/navbar.scss";
import "../src/components/Footer/footer.scss";
import "./components/ItemListContainer/ItemList/itemlist.scss";
import "../src/components/Carrusel/carrusel.scss";
import "../src/components/ItemListContainer/itemlistcontainer.scss";
import "./components/Item/item.scss";
import "./components/ItemCount/itemcount.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import NavBar from "../src/components/NavBar/NavBar.js";
import Footer from "../src/components/Footer/Footer.js";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import Carrusel from "./components/Carrusel/Carrusel";

function App() {
  fetch("https://api.mercadolibre.com/sites/MLA/search?q=mouse")
    .then((response) => response.json())
    .then((data) => console.log("---->", data));

  return (
    <main className="App">
      <NavBar />
      <ItemListContainer />
      <Carrusel />
      <Footer />
    </main>
  );
}

export default App;
