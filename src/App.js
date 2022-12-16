import "./styles/App.scss";
import "./styles/navbar.scss";
import "./styles/base/reset.scss";
import "./styles/base/typography.scss";
import "./components/NavBar.js";
import "./components/ItemListContainer";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
