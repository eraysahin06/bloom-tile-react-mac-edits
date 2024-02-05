// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, singleProductStyle }) => {
  return (
    <div
      className={`flex flex-col max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 transform hover:scale-105 bg-gray-100 ${singleProductStyle}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.code}
        </span>
        {product.size && (
          <span className="text-gray-500 text-sm">Size: {product.size}</span>
        )}
      </div>
      <div className="px-6 py-4">
        <Link to={`/products/${product.id}`} className="text-blue-500">
          <button className="bg-black text-white px-4 py-2 rounded-full h-10">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
