import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="d-flex navigation">
      <li>
        <NavLink to="/category/todos">Todos</NavLink>
      </li>
      <li>
        <NavLink to="/category/tipograficos">Tipográficos</NavLink>
      </li>
      <li>
        <NavLink to="/category/figuras">Figuras</NavLink>
      </li>
      <li>
        <NavLink to="/category/peliculas">Películas</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
