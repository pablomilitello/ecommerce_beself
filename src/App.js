import "./styles/App.scss";
import "../src/components/CartWidget/cartwidget.scss";
import "../src/components/NavBar/navbar.scss";
import "../src/components/ItemListContainer/itemlistcontainer.scss";
import "../src/components/CardProducts/cardproducts.scss";
import "../src/components/ItemCount/itemcount.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import NavBar from "../src/components/NavBar/NavBar.js";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
