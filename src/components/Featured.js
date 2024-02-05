import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slideData from '../data/slideData';

const Featured = () => {
  const [rightCurrentSlide, setRightCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false); // New state for tracking arrow clicks
  const totalSlides = slideData.length;

  const goToRightPrevSlide = () => {
    setArrowClicked(true); // Set arrowClicked to true when left arrow is clicked
    setRightCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
    );
  };

  const goToRightNextSlide = () => {
    setArrowClicked(true); // Set arrowClicked to true when right arrow is clicked
    setRightCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  useEffect(() => {
    // Set isLoaded to true after a delay
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let intervalDuration = arrowClicked ? 10000 : 5000; // Check if an arrow was clicked recently

    // Set up automatic slide change with dynamic interval duration
    const intervalId = setInterval(() => {
      setRightCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      setArrowClicked(false); // Reset arrowClicked after interval duration
    }, intervalDuration);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [totalSlides, arrowClicked]);

  return (
    <div
      className={`my-6 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 ${
        isLoaded ? 'fade-in' : ''
      }`}
    >
      {/* Left Section (Slogan) */}
      <div className="flex items-center justify-center max-w-[800px] mb-4 lg:mb-0 mx-auto bg-gray-100 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            Elevate Your Space with Stunning Tiles and Hardwood Flooring
          </h2>
          <p className="text-lg text-gray-700">
            Discover a world of possibilities as you explore our diverse range
            of tiles, slabs, and hardwood flooring options. Whether you're
            looking to revamp your kitchen, bathroom, or entire living space,
            our curated selection offers something for every taste and design
            vision.
          </p>

          {/* Button to View All Products */}
          <Link
            to="/products"
            className="text-xl mt-4 text-white bg-black py-4 px-6 rounded-lg inline-block transition-all duration-300 hover:bg-white hover:text-black border border-black"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Right Section (Slide Show) */}
      <div className="relative border max-w-[800px] w-full overflow-hidden mx-auto">
        <div className="relative h-[400px] overflow-hidden">
          <Link
            to={`/products/${slideData[rightCurrentSlide].id}`}
            target="_blank"
          >
            {/* Image Container with Overlay */}
            <div className="relative">
              <img
                src={slideData[rightCurrentSlide].image}
                alt={`Right Slide ${rightCurrentSlide + 1}`}
                className="w-full h-full object-cover cursor-pointer transform transition-transform duration-500 hover:scale-105"
              />

              {/* Overlay with Product Name at the Top */}
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                {slideData[rightCurrentSlide].name}
              </div>
            </div>
          </Link>

          <button
            onClick={goToRightPrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
          >
            &lt;
          </button>

          <button
            onClick={goToRightNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
          >
            &gt;
          </button>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slideData.map((_, index) => (
            <div
              key={index}
              onClick={() => setRightCurrentSlide(index)}
              className={`w-3 h-3 mx-1 cursor-pointer rounded-full ${
                rightCurrentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
