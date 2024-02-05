import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import NavUnder from './components/NavUnder';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './components/SingleProduct'; // Import SingleProduct
import products from './data/products';
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
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* Use the SingleProduct component for each product route */}
            {products.map((product) => (
              <Route
                key={product.id}
                path={`/products/${product.id}`}
                element={<SingleProduct product={product} />}
              />
            ))}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoot />);
reportWebVitals();
