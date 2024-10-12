import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="cart">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString()} ₽</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Удалить</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Итого: {total.toLocaleString()} ₽</h2>
            <button className="checkout-btn" onClick={handleCheckout}>Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
