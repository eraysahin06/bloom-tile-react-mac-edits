import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/NewLogo.png';

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`container mx-auto mt-8 mb-10 ${
        loading ? 'opacity-0' : 'opacity-100 transition-all duration-500'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">
          About Bloom Tile
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-10 lg:space-x-12 p-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img
              src={aboutImage}
              alt="About Bloom Tile"
              className="w-150 rounded-md p-4"
            />
          </div>

          <div className="lg:w-1/2 p-4">
            <p className="text-lg text-gray-800">
              Welcome to Bloom Tile, where we passionately transform spaces with
              a blend of timeless beauty and exceptional quality. Our curated,
              exclusive tile collections are carefully chosen to resonate with
              your unique style and create the perfect setting for making
              cherished memories.
            </p>

            <p className="text-lg text-gray-800 mt-4">
              We understand that selecting the right tiles is a crucial part of
              crafting a stunning environment, and we are here to help you every
              step of the way. Our commitment goes beyond offering outstanding
              tile collections; we strive to provide an unparalleled customer
              experience that makes the journey of buying tiles as enjoyable and
              hassle-free as possible.
            </p>

            <p className="text-lg text-gray-800 mt-4">
              With our personalized assistance, expert guidance, and seamless
              support, you can trust us to be your partner in realizing your
              vision for a truly remarkable space. We invite you to join us in
              this exciting transformational journey, as we work together to
              create environments that celebrate individuality, ignite
              inspiration, and leave a lasting legacy.
            </p>

            <p className="text-lg text-gray-800 mt-4">
              With Bloom Tile, you can expect a harmonious blend of
              extraordinary design and unmatched service, turning your home or
              commercial space into a true masterpiece.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
