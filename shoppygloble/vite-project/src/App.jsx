import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Header /> {/* Yahan Header include karein */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> {/* For 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
