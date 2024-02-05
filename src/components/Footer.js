// Footer.js

import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Contact Information */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p>Address: 1701 Creditstone Rd, Vaughan, ON L4K 5V6</p>
          <p>Phone: +1 (416) 891-6769</p>
        </div>

        {/* Email for Inquiries */}
        <div className="text-white mb-8 lg:mb-0 lg:ml-8">
          <p className="text-lg font-bold mb-2">For Inquiries:</p>
          <p>
            Email:{' '}
            <a href="mailto:info@bloomtile.ca" className="underline">
              info@bloomtile.ca
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-8 lg:mb-0 lg:ml-8">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          {/* Contact Link */}
          <a
            href="/contact"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            Contact
          </a>

          {/* About Link */}
          <a
            href="/about"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
