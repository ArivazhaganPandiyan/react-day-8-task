import React from 'react';
import { useProduct } from './ProductContext';
import './ProductList.css';

const ProductList = () => {
  const { productState, productDispatch } = useProduct();

  const handleAddToCart = (product) => {
    productDispatch({ type: 'ADD_TO_CART', payload: { ...product } });
  };

  const isProductInCart = (productId) => {
    return productState.cart.some(item => item.id === productId);
  };

  return (
    <div className="product-list-container">
      {productState.products.map(product => (
        <div key={product.id} className="product-item">
          <div className="product-details">
            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
            <p className="product-name">{product.title}</p>
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            <button
              className="product-button"
              onClick={() => handleAddToCart(product)}
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
