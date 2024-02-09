import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
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

      {/* Category Filter Section */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
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
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <ProductCard
              product={product}
              singleProductStyle={
                filteredProducts.length === 1 ? 'flex-grow-0' : 'flex-grow'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
