import React from "react";
import { assets } from "../assets/assetsFrontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState(false);
  const [token, setToken] = useState(true);

  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  const handelToHome = () => {
    navigate("/home");
  };

  const handelToFalseMenu = () => {
    setShowButton(false);
  };

  const handleToMyProfile = () => {
    navigate("/my-profile");
  };

  const handleToMyAppointment = () => {
    navigate("/my-appointment");
  };

  const handleSetToken = () => {
    setToken(false);
  };

  const navMenu = [
    { path: "/home", label: "HOME" },
    { path: "/donner", label: "BLOOD CENTER" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT US" },
    {path: "/chatbot", label: "CHATBOT"},
  ];

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="App Logo"
        onClick={handelToHome}
      />

      {/* Navigation items */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navMenu.map(({ path, label }) => (
          <NavLink key={path} to={path} className="py-1">
            <li>{label}</li>
            <hr className="border-none outline-none h-0.5 w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Create Account button */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile Pic"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Down Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={handleToMyProfile}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={handleToMyAppointment}
                >
                  My Appointments
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={handleSetToken}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-gradient-custom-color text-white px-8 py-3 rounded-full font-bold hidden md:block"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => {
            setShowButton(true);
          }}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="menu"
        />

        {/* ------ Mobile Menu ------ */}
        <div
          className={` ${
            showButton ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img
              className="w-36"
              src={assets.logo}
              alt="App Logo"
              onClick={() => {
                handelToFalseMenu();
                handelToHome();
              }}
            />
            <img
              className="w-7"
              onClick={handelToFalseMenu}
              src={assets.cross_icon}
              alt="cross"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            {navMenu.map(({ path, label }) => (
              <NavLink key={path} to={path} onClick={handelToFalseMenu}>
                <li className="px-4 py-2 rounded inline-block">{label}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
