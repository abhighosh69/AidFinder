import React from "react";
import { assets } from "../assets/assetsFrontend/assets";

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-12 mb-28 text-sm">
        <img className="w-full md:max-w-[420px]" src={assets.contact_image} alt="Contact Image" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR OFFICE</p>
          <p  className="text-gray-500 text-base">
            1C, Nilmoni Ganguly Ln, <br />
            Kolkata 700009
          </p>
          <p className="text-gray-500 text-base">
            Tel: (415) 555-0132 <br />
            Email: meow@gmail.com
          </p>
          <p className="text-gray-600 font-semibold text-xl">Careers at Aid Finder</p>
          <p className="text-gray-500 text-lg">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-base hover:bg-primary hover:text-secondary transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
