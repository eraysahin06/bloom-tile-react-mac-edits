import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // Import your product data

const SingleProduct = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 50);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  if (!product) {
    return <div>No product found</div>;
  }

  const { name, description, code, image, category, size, finish } = product;

  // Get other products from the same category (excluding the current product)
  const relatedProducts = products.filter(
    (p) => p.category === category && p.id !== product.id
  );

  return (
    <div className="container mx-auto mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className={`transition-all duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Link
          to="/products"
          className="text-yellow-600 text-2xl mb-8 block hover:underline"
        >
          &lt; Products
        </Link>
        <div className="mb-4">
          <img src={image} alt={name} className="w-full h-auto" />
        </div>
      </div>
      <div
        className={`md:pl-8 transition-all duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div>
          <h2 className="text-5xl font-bold p-4">{name}</h2>
          <p className="text-2xl text-gray-800 my-4 p-4">{description}</p>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex items-center p-4">
          <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-xl font-semibold text-gray-700 mr-2">
            {code}
          </span>
          {size && <span className="text-gray-500 text-xl">Size: {size}</span>}
        </div>
        <hr className="border-t border-gray-300" />
        <div className="p-4">
          <p className="text-2xl text-gray-600 mb-4">Category: {category}</p>

          {/* Conditionally render finish information */}
          {category === 'Tiles' && finish && (
            <p className="text-2xl text-gray-600 mb-4">Finish: {finish}</p>
          )}
        </div>
        <hr className="border-t border-gray-300" />
        <div className="mb-4 p-4">
          <p className="text-2xl font-semibold">
            Do you have any questions about this product?
          </p>
          <Link
            to="/contact"
            className="text-white text-2xl mt-4 py-4 px-6 bg-black hover:bg-gray-800 rounded-full inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div
        className={`mx-auto transition-all duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {' '}
        {/* Center the Related Products section horizontally */}
        <h3 className="text-center text-2xl font-bold mb-2">
          Related Products
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {relatedProducts.map((relatedProduct, index) => (
            <div
              key={relatedProduct.id}
              className={`transition-all duration-500 ${
                loading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Link
                to={`/products/${relatedProduct.id}`}
                className="border border-gray-300 p-4 rounded-md flex flex-col items-center hover:bg-gray-100"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-30 h-16 object-cover rounded-md mb-2 cursor-pointer"
                />
                <p className="text-lg text-gray-800">{relatedProduct.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
