import React from "react";
import { FaMinus } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="px-4 py-1">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full rounded-lg h-full text-gray-200 max-h-[500px] bg-black/75 flex flex-col justify-center items-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"><span className="text-gray-400">Frontend</span></h1>
          <div className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex items-center">
            <span className="inline-block"><FaMinus /></span>
            <span className="ml-2">Mockup</span>
          </div>
        </div>
        <img className="w-full rounded-lg max-h-[500px] object-cover" src="https://images.pexels.com/photos/9948308/pexels-photo-9948308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mockup" />
      </div>
    </div>
  );
};

export default Hero;
