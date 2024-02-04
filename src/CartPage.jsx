import React from 'react';
import { useProduct } from './ProductContext';
import './Cart.css'; // Import the CSS file

const CartPage = () => {
  const { productState, productDispatch } = useProduct();

  const handleQuantityChange = (id, quantity) => {
    productDispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemoveItem = (id) => {
    productDispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const calculateTotal = () => {
    return productState.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <h2>Your Cart</h2>
        <ul>
          {productState.cart.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button className='remove-btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Quantity: {productState.cart.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Total Amount: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default CartPage;
