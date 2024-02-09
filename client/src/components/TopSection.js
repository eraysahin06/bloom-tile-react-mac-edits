import React from 'react';
import mainImage from '../assets/NewLogo.png';

const TopSection = () => {
  return (
    <div className="bg-white border mx-4 rounded-lg text-white h-[500px] p-4 mt-2 flex flex-col items-center justify-center">
      <img src={mainImage} alt="Bloom Tile Logo" className="w-[800px] h-auto" />
      <p className="text-3xl p-3 text-black text-center">
        Short Slogan Text
      </p>
    </div>
  );
};

export default TopSection;
