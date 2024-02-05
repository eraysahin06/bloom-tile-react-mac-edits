import React, { useState, useEffect } from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarCheck,
} from 'react-icons/fa';

const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send the form data to the email address (replace with your actual email address)
    const response = await fetch('https://formspree.io/f/mzbndaqq', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div
      className={`container mx-auto mt-8 mb-10 p-4 ${
        loading ? 'opacity-0' : 'opacity-100 transition-all duration-500'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full border rounded-md py-2 px-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information (Split into two columns) */}
        <div className="mb-8 flex flex-col md:flex-row p-6">
          <div className="md:w-1/2 mb-4 md:mb-0 p-6 bg-gray-100 rounded-md border border-gray-300">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-2xl text-gray-800">
              <FaPhone className="inline-block mr-2" />
              +1 416 891 6769
            </p>
            <p className="text-2xl text-gray-800">
              <FaMapMarkerAlt className="inline-block mr-2" />
              Showroom
            </p>
            <p className="text-2xl text-gray-800 font-bold">
              1701 CREDITSTONE ROAD, CONCORD, ONTARIO L4K 5V6
            </p>
            <p className="text-2xl text-gray-800">
              <FaEnvelope className="inline-block mr-2" />
              info@bloomtile.ca
            </p>
          </div>

          <div className="md:w-1/2 p-4 bg-gray-100 rounded-md border border-gray-300">
            <p className="text-2xl text-gray-800 font-bold">Working Hours:</p>
            <p className="text-2xl text-gray-800">
              Monday to Friday 9 AM - 5 PM
            </p>
            <p className="text-2xl text-gray-800">Saturday 10am - 3pm</p>
            {/* Additional line with a reminder to book an appointment */}
            <p className="text-2xl text-gray-800 mt-4">
              <FaCalendarCheck className="inline-block mr-2" />
              Please don't forget to book your appointment by reaching out to
              us!
            </p>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
          <iframe
            title="Bloom Tile Showroom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.180069731112!2d-79.52350222375127!3d43.83136414088937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f267541dcfd%3A0x3614298e6e8ea7fb!2sBLOOM%20TILE!5e0!3m2!1str!2sca!4v1705874704143!5m2!1str!2sca"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
