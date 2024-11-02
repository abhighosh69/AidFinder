import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { specialityData } from "../assets/assetsFrontend/assets";

const Doctor = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleNavigation = (specialty) => {
    navigate(speciality === specialty ? "/doctors" : `/doctors/${specialty}`);
  };

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      {/* ------- Left Side ------- */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-lg text-gray-600">
          {specialityData.map((data) => (
            <p
              key={data.speciality}
              onClick={() => handleNavigation(data.speciality)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === data.speciality ? "bg-blue-100 text-black" : ""
              }`}
            >
              {data.speciality}
            </p>
          ))}
        </div>

        {/* ------- Right Side ------- */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item) => (
            <div
              onClick={() => {
                navigate(`/my-appointment/${item._id}`);
              }}
              key={item._id}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt={`Picture of Dr. ${item.name}`} />
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
    </div>
  );
};

export default Doctor;
