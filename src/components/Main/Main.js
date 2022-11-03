import Home from "./Home";
import ItemDetailContainer from "../Product/ItemDetailContainer";
import ItemListContainer from "../Product/ItemListContainer";
import Cart from "../Product/Cart";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/category/todos" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
