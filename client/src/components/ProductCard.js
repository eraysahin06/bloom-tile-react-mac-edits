import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, singleProductStyle }) => {
  // Destructure product details from props
  const { _id, name, description, code, image, size } = product;

  return (
    <div
      className={`flex flex-col max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 transform hover:scale-105 bg-gray-100 ${singleProductStyle}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {code}
        </span>
        {size && (
          <span className="text-gray-500 text-sm">Size: {size}</span>
        )}
      </div>
      <div className="px-6 py-4">
        <Link to={`/products/${_id}`} className="text-blue-500">
          <button className="bg-black text-white px-4 py-2 rounded-full h-10">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
