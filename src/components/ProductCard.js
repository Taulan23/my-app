import React from 'react';
import './ProductCard.css';

const ProductCard = React.memo(({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      <h3>{product.name}</h3>
      <p className="product-price">{product.price.toLocaleString()} ₽</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">Добавить в корзину</button>
    </div>
  );
});

export default ProductCard;
