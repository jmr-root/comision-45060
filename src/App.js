import "./css/Reboot.css";
import "./css/Grid.css";
import "./css/Helpers.css";
import "./css/App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import CartProvider from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Main />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
