import React, { useEffect, useState } from 'react';
import { FaCogs, FaObjectGroup, FaHardHat, FaPalette } from 'react-icons/fa';
import BasicImage from '../assets/product-images/dennis-calacatta.jpg';
import CustomImage from '../assets/product-images/city-white-decord.jpg';
import IntermediateImage from '../assets/product-images/rocky-noda-gray.jpg';
import AdvancedImage from '../assets/product-images/firuze.jpg';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, image }) => {
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
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-8 p-4"
      style={containerStyles}
    >
      <div className="bg-white rounded-md p-6 border border-gray-300 overflow-hidden">
        {/* Image */}
        <div className="mb-4 overflow-hidden hover:scale-105">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-md transform transition-transform duration-300"
          />
        </div>

        {/* Title and Icon */}
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          {icon && <span className="mr-4">{icon}</span>}
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-100 p-8 mt-8 flex flex-wrap">
      <h2 className="w-full text-4xl font-bold mb-6 p-4">Our Services</h2>

      {/* Basic Service */}
      <ServiceItem
        icon={<FaCogs />}
        title="Basic"
        description="Exquisite Tile and Slab Collection: Source your premium tiles and
        slabs from our extensive and diverse collection. We deliver quality,
        durability, and style in every piece."
        image={BasicImage}
      />

      {/* Intermediate Service */}
      <ServiceItem
        icon={<FaObjectGroup />}
        title="Intermediate"
        description="Mosaic Artistry: Discover the unique charm of our mosaic tiles,
        perfect for creating standout features in any space. We're experts in
        transforming spaces with custom-made designs."
        image={IntermediateImage}
      />

      {/* Advanced Service */}
      <ServiceItem
        icon={<FaHardHat />}
        title="Advanced"
        description="Superior Flooring Solutions: For floors that impress, choose from our
        engineered hardwood or luxury vinyl options. Offering unparalleled
        durability and style, we've got your flooring needs covered."
        image={AdvancedImage}
      />

      {/* Custom Service */}
      <ServiceItem
        icon={<FaPalette />}
        title="Custom"
        description="Tailored Solutions: Collaborate with our experts to create custom designs
  that perfectly suit your unique style and preferences. From custom flooring patterns to unique tile arrangements, we bring your creative ideas to life."
        image={CustomImage}
      />

      {/* Contact Us Now Button */}
      <div className="w-full text-center">
        <Link to="/contact">
          <button className="text-xl bg-black text-white px-4 py-4 rounded-md border border-white transition duration-300 hover:bg-white hover:text-black hover:border-black">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
