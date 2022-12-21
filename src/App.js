import "./styles/App.scss";
import "./styles/cartwidget.scss";
import "./styles/navbar.scss";
import "./styles/itemlistcontainer.scss";
import "./styles/carrusel.scss";
import "./styles/cardproducts.scss";
import "./styles/itemcount.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./components/NavBar.js";
import "./components/ItemListContainer.js";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Carrusel from "./components/Carrusel.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="Bienvenido a BeSelf!!!" />
      <Carrusel />
    </div>
  );
}

export default App;
