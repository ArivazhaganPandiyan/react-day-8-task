import React from 'react';


import ProductList from './ProductList';
import CartPage from './CartPage';
import { ProductProvider } from './ProductContext';


const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Shopping App</h1>
        <ProductList />
        <CartPage />
      </div>
    </ProductProvider>
  );
};

export default App;
