import React from 'react';
import './cart.css';

const Cart = props => {
  return (
    <div className='cart-box-modal'>
      <div className='cart-modal'>
        <div className='cart-close' onClick={() => props.closecart()}>
          <box-icon name='window-close' color='gray'></box-icon>
        </div>
        <h3>Shopping Cart</h3>
        <div className='cart-center'>
          <div className='cart-item'>
            <img src='' alt='img' />
            <div>
              <h3>Title</h3>
              <p className='price'>$ 456 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
