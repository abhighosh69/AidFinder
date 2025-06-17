import React, { useContext } from "react";
import { assets } from "../assets/assetsAdmin/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const {dToken, setDToken} = useContext(DoctorContext);

  const navigate = useNavigate();

  const Logout = () => {
    navigate('/');
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
    //window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-6 sm:px-12 py-4 border-b bg-secondary shadow-sm">
      {/* Left Side: Logo + Role */}
      <div className="flex items-center gap-4">
        <img
          className="w-36 sm:w-44 cursor-pointer object-contain"
          src={assets.dashboard_panel}
          alt="Admin Logo"
        />
        <p className="px-4 py-1 text-sm sm:text-base rounded-full border border-gray-300 text-gray-600 font-medium">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      {/* Right Side: Logout Button */}
      <button
        onClick={Logout}
        className="bg-gradient-custom hover:brightness-110 text-white text-base font-semibold sm:text-base px-6 sm:px-8 py-2 rounded-full shadow-md transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
