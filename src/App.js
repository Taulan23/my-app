import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Cart = lazy(() => import('./pages/Cart'));
const Payment = lazy(() => import('./pages/Payment'));

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
