import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/nav-logo-bloom-tile.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleResize = (e) => {
      if (e.matches) {
        // Close the menu when the screen width is larger than 768px
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    mediaQuery.addEventListener('change', handleResize);

    // Check initial screen width
    handleResize(mediaQuery);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          <img src={LOGO} alt="Bloom Tile" className="w-60" />
        </Link>

        <div className={`lg:hidden ${window.innerWidth <= 500 && 'block'}`}>
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`lg:flex lg:space-x-8 ${
            isMenuOpen ? 'flex flex-col space-y-4' : 'hidden'
          }`}
        >
          <li>
            <Link
              to="/products"
              className="text-black hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
