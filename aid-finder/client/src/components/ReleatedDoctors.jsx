import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ReleatedDoctors = ({ speciality, docId }) => {
    
    const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item) => (
          <div
            onClick={() => {
              navigate(`/book-appointment/${item._id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
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
  );
};

export default ReleatedDoctors;
