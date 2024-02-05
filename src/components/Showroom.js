import React, { useState, useEffect } from 'react';
import { FaGem } from 'react-icons/fa';
import showroomImage from '../assets/NewLogo.png';

const Showroom = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const containerStyles = {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
  };

  return (
    <div
      className="bg-gray-100 p-8 mt-8 flex flex-wrap items-center"
      style={containerStyles}
    >
      {/* Logo Section */}
      <div className="w-full mt-4 flex justify-center items-center">
        <img
          src={showroomImage}
          alt="Luxury and Style. Bloom Tile."
          className="w-40 h-auto rounded-md mb-4"
        />
        {/* Title */}
        <h2 className="w-full text-5xl mb-6 text-center md:text-left">
          You're Invited!
        </h2>
      </div>

      {/* Text Section - Left Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 lg:pr-4 p-4">
        {/* State-of-Art Showroom */}
        <div className="mb-6 bg-gray-200 p-4 rounded-md w-full md:w-5/6 mx-auto md:mx-0">
          <h2 className="text-2xl mb-2 flex items-center">
            <span className="mr-2">
              <FaGem />
            </span>
            State-of-Art Showroom
          </h2>
          <p className="text-gray-700">
            Visit our 22,000 sqft. one-stop designer and builder showroom to
            explore the latest trends in premium tiles, slabs, antique mirrors,
            and superior flooring solutions.
          </p>
        </div>

        {/* You Won't Leave Empty-Handed */}
        <div className="bg-gray-200 p-4 rounded-md w-full md:w-5/6 mx-auto md:mx-0">
          <h2 className="text-2xl mb-2 flex items-center">
            <span className="mr-2">
              <FaGem />
            </span>
            You Won't Leave Empty-Handed
          </h2>
          <p className="text-gray-700">
            Immerse yourself in a world of design possibilities. With our
            curated selection, you won't go home without finding the perfect
            addition for your space.
          </p>
        </div>
      </div>

      {/* Google Maps Integration - Right Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <div className="relative h-96">
          {/* Insert your Google Maps Embed code here */}
          <iframe
            title="Bloom Tile Showroom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.180069731112!2d-79.52350222375127!3d43.83136414088937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f267541dcfd%3A0x3614298e6e8ea7fb!2sBLOOM%20TILE!5e0!3m2!1str!2sca!4v1705874704143!5m2!1str!2sca"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col justify-center items-center w-full mt-6 p-4 border-gray-300">
        <h2 className="text-5xl mb-4 text-center md:text-left">
          Explore <span className="text-yellow-600">Luxury and Style</span> in
          Person
        </h2>
        <button className="text-xl bg-black text-white mt-4 px-8 py-6 rounded-md border border-white transition duration-300 hover:bg-white hover:text-black hover:border-black">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Showroom;
