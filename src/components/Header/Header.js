import React from "react";

import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import Brand from "./Brand";

const Header = () => {
  return (
    <header>
      <div className="row align-items-center">
        <div className="col d-flex">
          <Brand />
        </div>
        <div className="col-8 d-flex justify-content-center">
          <NavBar />
        </div>
        <div className="col d-flex justify-content-end">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
