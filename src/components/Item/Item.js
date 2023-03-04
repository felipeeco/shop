import React from 'react';
import { CartContext } from '../../context/CartContext';

const Item = data => {
  const cartContext = React.useContext(CartContext);

  return (
    <div className='product'>
      <div className='product-img'>
        <img src={data?.images[0]} alt='img' />
      </div>
      <div className='product-footer'>
        <h2>{data?.title}</h2>
        <p>{data?.brand}</p>
        <p>
          <small>{data?.description}</small>
        </p>
        <p className='price'>$ {data?.price}</p>
      </div>
      <div className='button-box'>
        <button className='btn' onClick={() => cartContext.addProduct(data.id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
