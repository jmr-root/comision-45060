import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </>
  );
};

export default ItemList;
