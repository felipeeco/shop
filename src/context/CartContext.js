import React from 'react';

export const CartContext = React.createContext();

export const CartProducts = props => {
  const [productsCart, setProductsCart] = React.useState([]);

  const addProduct = productId => {
    setProductsCart(product => product.concat(productId));
  };

  const value = {
    productsCart,
    addProduct
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProducts;
