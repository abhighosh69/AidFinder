import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assetsFrontend/assets";

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-lg">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      {/* ----- Category ----- */}
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll ">
        {specialityData.map((item, index) => (
          <Link className="flex flex-col items-center text-base cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" to={`/doctors/${item.speciality}`} key={index}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="Speciality Images" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
