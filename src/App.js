import "./css/Reboot.css";
import "./css/Grid.css";
import "./css/Helpers.css";
import "./css/App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import CartProvider from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container-fluid text-center fs-11 ads">ENVÍO GRATIS EN COMPRAS MAYORES A $6.000.-</div>
      <div className="container">
        <BrowserRouter>
          <CartProvider>
            <Header />
            <Main />
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
