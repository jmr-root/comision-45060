import Home from "./Home";
import ItemDetailContainer from "../Product/ItemDetailContainer";
import ItemListContainer from "../Product/ItemListContainer";
import Cart from "../Product/Cart";
import Checkout from "../Form/Checkout";
import { Routes, Route } from "react-router-dom";
import OrderSearch from "../User/OrderSearch";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/category/todos" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders/" element={<OrderSearch />} />
      </Routes>
    </main>
  );
};

export default Main;
