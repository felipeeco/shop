import React, { useEffect } from 'react';
import './products.css';
import Item from '../Item/Item';

const Products = () => {
  const [products, setProducts] = React.useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(response => response.json())
      .then(response => setProducts(response));
  }, []);

  return (
    <>
      <h1 className='tittle'>Products</h1>
      <div className='products'>
        {products &&
          products?.products?.map(data => (
            <div key={data?.id}>
              <Item
                id={data?.id}
                images={data?.images}
                title={data?.title}
                brand={data?.brand}
                description={data?.description}
                price={data?.price}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
