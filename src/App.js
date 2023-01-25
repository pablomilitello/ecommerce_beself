import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./styles/App.scss";
import { CartProvider } from "./storage/cartContext";

import NavBar from "../src/components/NavBar/NavBar.js";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import Footer from "../src/components/Footer/Footer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import CartContainer from "./components/CartContainer/CartContainer";
import app from "./services/firebase";

console.log(app);

function App() {
  return (
    <>
      <CartProvider>
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
            <Route path="/we" element={<Nosotros />}></Route>
            <Route path="/contact" element={<Contacto />}></Route>
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
