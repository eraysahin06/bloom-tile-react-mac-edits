// NavUnder.js

import React from 'react';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';

const NavUnder = () => {
  return (
    <div className="bg-black p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/bloomtiletoronto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Contact Number */}
        <div className="text-white">
          <FaPhone size={16} className="inline mr-2" />
          +1 416-891-6769
        </div>
      </div>
    </div>
  );
};

export default NavUnder;
