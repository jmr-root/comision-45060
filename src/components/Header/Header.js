import Logo from "../../../src/images/logo.png";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <header>
      <div className="row align-items-center mt-3">
        <div className="col d-flex">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="col-8 d-flex justify-content-center">
          <NavBar />
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/orders" className="btn d-flex">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
