import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="h-[100vh] bg-black flex items-center justify-center gap-5">
        <Link to={'/menu:/id'}>
      <p className="text-white md:text-4xl  text-sm   bg-gray-900  px-6  md:px-10 md:py-5 py-3 rounded-lg hover:bg-blue-500 font-bold transition-all ease-in"> Add Menu </p>
        </Link>
        <Link to={'/menuItems'}>
      <p className="text-white md:text-4xl  text-sm   bg-gray-900  px-6  md:px-10 md:py-5 py-3 rounded-lg hover:bg-blue-500 font-bold transition-all ease-in">Add Menu items</p>
        </Link>
    </div>
  );
}

export default Hero;
