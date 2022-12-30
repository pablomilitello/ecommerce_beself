import "./styles/App.scss";
import "../src/components/CartWidget/cartwidget.scss";
import "../src/components/NavBar/navbar.scss";
import "../src/components/Footer/footer.scss";
import "./components/ItemListContainer/ItemList/itemlist.scss";
import "../src/components/ItemListContainer/itemlistcontainer.scss";
import "./components/Item/item.scss";
import "./components/Item/ItemCount/itemcount.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import NavBar from "../src/components/NavBar/NavBar.js";
import Footer from "../src/components/Footer/Footer.js";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
