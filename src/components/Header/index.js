import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../img/logo-small.jpg';
import Cart from '../Cart';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);

  const cartContext = React.useContext(CartContext);

  const clickMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const clickOpenCart = () => {
    setOpenCart(!openCart);
  };

  const LiContent = () => {
    return (
      <>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <header
        style={openMenuMobile ? { minHeight: '135px' } : { minHeight: '100px' }}
      >
        <div className='menu-mobile' onClick={clickMenuMobile}>
          <box-icon name='menu'></box-icon>
        </div>
        <div
          className='nav_items'
          style={
            openMenuMobile
              ? { transform: 'inherit' }
              : { transform: 'translateX(-100%)' }
          }
        >
          <LiContent />
        </div>
        <a href='#'>
          <div className='logo'>
            <img src={logo} alt='Logo' />
          </div>
        </a>
        <ul className='ul-pc'>
          <LiContent />
        </ul>
        <div className='cart' onClick={clickOpenCart}>
          <box-icon name='cart'></box-icon>
          <span className='item-total'>{cartContext.productsCart.length}</span>
        </div>
      </header>

      {openCart && <Cart closecart={() => clickOpenCart()} />}
    </>
  );
};

export default Header;
