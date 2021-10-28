import Order from "./Order";
import Home from "./Home.js";
import Products from "./Products.js";
import Contacts from "./Contacts.js";
import { Switch } from "react-router";



function App() {
  return (
    <div className="App">

        <Home />
        <Order />
        <Products />
        <Contacts />
    </div>
  );
}

export default App;
