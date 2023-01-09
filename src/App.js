import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./styles/App.scss";
import "../src/components/CartWidget/cartwidget.scss";
import "../src/components/NavBar/navbar.scss";
import "../src/components/Footer/footer.scss";
import "../src/components/ItemDetailContainer/ItemDetail/itemdetail.scss";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ItemListContainer />
                <SlideShow />
              </>
            }></Route>
          <Route path="/detail/:productID" element={<ItemDetailContainer />}></Route>
          <Route path="/category/:categoryID" element={<ItemListContainer />}></Route>
          <Route
            path="/we"
            element={
              <div>
                <h2>Nosotros</h2>
              </div>
            }></Route>

          <Route
            path="/contact"
            element={
              <div>
                <h2>Contactanos</h2>
              </div>
            }></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
