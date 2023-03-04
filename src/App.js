import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProducts } from './context/CartContext';
import 'boxicons';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <CartProducts>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </div>
    </CartProducts>
  );
}

export default App;
