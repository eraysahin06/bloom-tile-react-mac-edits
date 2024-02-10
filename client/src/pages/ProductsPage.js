// ProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductsPage = ({pro}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // Handle error
        setError('An error occurred while fetching products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-gray-100 w-full p-8">
      <h2 className="text-4xl p-4 font-bold mb-8">
        {selectedCategory === 'All' ? 'All Products' : `${selectedCategory}`}
      </h2>

      {/* Error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Category Filter Section */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 my-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Flex Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={index} className="transition-all duration-500">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
