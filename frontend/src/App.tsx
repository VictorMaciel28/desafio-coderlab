import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage/ProductDescriptionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:id" element={<ProductDescriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;