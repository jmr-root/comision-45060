export const products = [
  {
    id: 1,
    stock: 10,
    name: "Circle",
    category: "tipograficos",
    price: "2.000",
    priceOffer: "2.000",
    discountPorcent: 0,
    image: "https://via.placeholder.com/400x600.png",
    new: true,
  },
  {
    id: 2,
    stock: 4,
    name: "Square",
    category: "figuras",
    price: "2.000",
    priceOffer: "1.600",
    discountPorcent: 20,
    image: "https://via.placeholder.com/400x600.png",
    new: false,
    label: "prueba",
  },
  {
    id: 3,
    stock: 0,
    name: "Triangle",
    category: "peliculas",
    price: "2.000",
    priceOffer: "2.000",
    discountPorcent: 0,
    image: "https://via.placeholder.com/400x600.png",
    new: false,
    label: "prueba",
  },
];

export const getProducts = (categoryName) => {
  return new Promise((res, rej) => {
    const productsFilter = products.filter((prod) => prod.category === categoryName);
    const resultProducts = categoryName ? productsFilter : products;
    setTimeout(() => {
      res(resultProducts);
    }, 0);
  });
};

export const getProduct = (id) => {
  return new Promise((res, rej) => {
    const product = products.find((prod) => prod.id === +id);
    setTimeout(() => {
      res(product);
    }, 0);
  });
};
