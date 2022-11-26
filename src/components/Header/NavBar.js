import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const catCollection = collection(db, "categorias");
    getDocs(catCollection)
      .then((res) => {
        const listCategories = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setCategories(listCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="d-flex navigation justify-content-center">
      {categories.map((cat) => (
        <li key={cat.id}>
          <NavLink to={`/category/${cat.path}`} className="btn-text text-uppercase fs-13">
            {cat.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
