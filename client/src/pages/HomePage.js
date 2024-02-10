import React from 'react';
import Featured from '../components/Featured';
import Services from '../components/Services';
import Showroom from '../components/Showroom';
import Onestop from '../components/Onestop';
import TopSection from '../components/TopSection';
import ReviewsSection from '../components/ReviewSection';
import '../App.css'

const HomePage = () => {
  return (
    <div className='bg-gray-100'>
      <TopSection />
      <Services />
      <hr className="my-8 border-t border-gray-300" />
      <Featured />
      <hr className="border-t border-gray-300" />
      <Onestop />
      <hr className="border-t border-gray-300" />
      <ReviewsSection />
      <hr className="border-t border-gray-300" />
      <Showroom />
    </div>
  );
};

export default HomePage;
