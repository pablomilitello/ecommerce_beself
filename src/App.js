import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./styles/App.scss";
import "../src/components/CartWidget/cartwidget.scss";
import "../src/components/NavBar/navbar.scss";
import "../src/components/Footer/footer.scss";
import "./components/ItemListContainer/ItemList/itemlist.scss";
import "../src/components/SlideShow/slideshow.scss";
import "../src/components/ItemListContainer/itemlistcontainer.scss";
import "./components/Item/item.scss";
import "./components/ItemCount/itemcount.scss";

import NavBar from "../src/components/NavBar/NavBar.js";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import Footer from "../src/components/Footer/Footer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <main className="App">
        <p className="SlideShowText">Productos Destacados</p>
        <SlideShow />
      </main>
      <Footer />
    </>
  );
}

export default App;
