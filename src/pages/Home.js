import React, { useState, useEffect, useContext, useCallback } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../contexts/CartContext';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const fetchProducts = useCallback(async () => {
    try {
      // В реальном приложении здесь был бы запрос к API
      const mockProducts = [
        { id: 1, name: 'iPhone 13 Pro', price: 99990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1631220221000' },
        { id: 2, name: 'MacBook Air M1', price: 89990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000' },
        { id: 3, name: 'iPad Pro 12.9"', price: 109990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126613000' },
        { id: 4, name: 'AirPods Pro', price: 22990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000' },
        { id: 5, name: 'Apple Watch Series 7', price: 36990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1631661671000' },
        { id: 6, name: 'iMac 24"', price: 149990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000' },
        { id: 7, name: 'Mac mini', price: 74990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603403462000' },
        { id: 8, name: 'AirPods Max', price: 62990, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000' },
      ];
      setProducts(mockProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Добро пожаловать в TechStore</h1>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
