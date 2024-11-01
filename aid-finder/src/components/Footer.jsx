import React from "react";
import { assets } from "../assets/assetsFrontend/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleToRedirect = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------- Left Side ------- */}
        <div>
          <img
            className="mb-2 w-44 cursor-pointer"
            src={assets.logo}
            alt="App Logo"
            onClick={() => handleToRedirect("/home")}
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ------- Center Side ------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="cursor-pointer flex flex-col gap-2 text-gray-600 text-base">
            <li onClick={() => handleToRedirect("/home")}>Home</li>
            <li onClick={() => handleToRedirect("/about")}>About us</li>
            <li onClick={() => handleToRedirect("/contact")}>Contact us</li>
            <li onClick={() => handleToRedirect("/privacy-policy")}>
              Privacy policy
            </li>
          </ul>
        </div>

        {/* ------- Right Side ------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-base">
            <li>+1-222-444-9999</li>
            <li>meow@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------- Copyright Text ------- */}
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright © 2024 Aid Finder - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
