import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../../services/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = query(collectionProd, where("new", "==", true));

    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);
  }, []);

  if (loading) {
    return (
      <div className="row mt-5">
        <div className="col-4">
          <Skeleton height={420} className="skeleton-loader" />
          <Skeleton height={30} count={2} className="skeleton-loader" />
        </div>
        <div className="col-4">
          <Skeleton height={420} className="skeleton-loader" />
          <Skeleton height={30} count={2} className="skeleton-loader" />
        </div>
        <div className="col-4">
          <Skeleton height={420} className="skeleton-loader" />
          <Skeleton height={30} count={2} className="skeleton-loader" />
        </div>
      </div>
    );
  }

  return (
    <div className="row mt-5">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
