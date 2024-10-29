import React from "react";
import { assets } from "../assets/assetsFrontend/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {

const navigate = useNavigate();

const handleToDoneters= () => {
  navigate("/doneter")
}
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-60 md:mx-10">
      {/* ------- Left Side ------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Find Donner</p>
          <p className="mt-4">With 100+ Trusted Doneters</p>
        </div>
        <button className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-110 transition-all" onClick={handleToDoneters}>Find Now</button>
      </div>

      {/* ------- Right Side ------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.donner_banner} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
