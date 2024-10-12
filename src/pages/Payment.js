import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Payment.css';

function Payment() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="payment">
      <h1>Оплата заказа</h1>
      <div className="payment-details">
        <p>Сумма к оплате: {total.toLocaleString()} ₽</p>
        <img src="/sberbank-payment.jpg" alt="Страница оплаты Сбербанк" className="payment-image" />
        <p>Это демонстрационная страница оплаты. В реальном приложении здесь был бы интерфейс оплаты Сбербанка.</p>
      </div>
    </div>
  );
}

export default Payment;
