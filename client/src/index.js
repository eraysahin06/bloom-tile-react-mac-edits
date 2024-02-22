import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import NavUnder from './components/NavUnder';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './components/SingleProduct';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const AppRoot = () => (
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="mt-[110px]">
            <NavUnder />
          </div>
          <Routes>
            <Route path="*" element={<p>Path not resolved</p>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:id"
              element={<SingleProduct />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<AppRoot />);
reportWebVitals();
