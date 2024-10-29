import React from "react";
import { doctors } from "../assets/assetsFrontend/assets";
import { useNavigate } from "react-router-dom";
const TopDoctors = () => {

  const navigate = useNavigate();

  /* const handelBookAppointment = () => {
    navigate(`/appointment/${item._id}`);
  } */

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      
      {/* Section Title & Description */}
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-lg">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid Container & Details */}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item) => (
          <div onClick={() => {
            navigate(`/my-appointment/${item._id}`);
          }}
            key={item._id}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-blue-50" src={item.image} alt="doctor img" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-base">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
