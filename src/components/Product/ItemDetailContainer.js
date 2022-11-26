import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { collectionProd } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(collectionProd, id);

    getDoc(ref)
      .then((res) => {
        //console.log(res);
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="row mt-5">
        <div className="col-6">
          <Skeleton height={620} className="skeleton-loader" />
        </div>
        <div className="col-4">
          <Skeleton height={20} className="skeleton-loader mt-5" />
          <Skeleton height={30} className="skeleton-loader" />
          <Skeleton height={60} className="skeleton-loader" />
          <Skeleton height={60} className="skeleton-loader" />
          <Skeleton height={60} className="skeleton-loader" />
          <Skeleton height={40} className="skeleton-loader" />
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
