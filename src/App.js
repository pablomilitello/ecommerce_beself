import "./styles/App.scss";
import "./styles/cartwidget.scss";
import "./styles/navbar.scss";
import "./styles/itemlistcontainer.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./components/NavBar.js";
import "./components/ItemListContainer";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="Bienvenido a BeSelf!!!" />
    </div>
  );
}

export default App;
