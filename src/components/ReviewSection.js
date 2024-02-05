import React from 'react';
import { FaStar } from 'react-icons/fa';
import user1Image from '../assets/product-images/firuze.jpg';
import user2Image from '../assets/product-images/firuze.jpg';
import user3Image from '../assets/product-images/firuze.jpg';

const ReviewsSection = () => {
  const reviews = [
    {
      user: 'John Doe',
      rating: 5,
      content: 'Excellent products and outstanding service!',
      image: user1Image,
    },
    {
      user: 'Jane Smith',
      rating: 5,
      content: 'Bloom Tile transformed my living space beautifully!',
      image: user2Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
    {
      user: 'Robert Johnson',
      rating: 5,
      content: 'Top-notch quality and stylish designs. Highly recommended!',
      image: user3Image,
    },
  ];

  return (
    <div className="p-8 flex flex-wrap justify-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 w-full text-center">
        Customer Reviews
      </h2>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-gray-200 p-6 rounded-lg mb-6 mx-4"
          style={{ minWidth: '300px', maxWidth: '400px' }}
        >
          <div className="flex items-center mb-2">
            <img
              src={review.image}
              alt={review.user}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg font-semibold">{review.user}</span>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 mr-1" />
            ))}
          </div>
          <p className="text-gray-700">{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
