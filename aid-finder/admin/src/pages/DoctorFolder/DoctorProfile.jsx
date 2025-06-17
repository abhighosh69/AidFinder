import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
const DoctorProfile = () => {
  const { dToken, getProfileData, doctorData, setDoctorData, backendUrl } =
    useContext(DoctorContext);

  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateDoctorProfile = async () => {
    try {
      const updateData = {
        available: doctorData.available,
        fees: doctorData.fees,
        about: doctorData.about,
      };
      const { data } = await axios.post(
        backendUrl + "api/doctor/update-profile",
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    doctorData && (
      <div>
        <div className="flex flex-col gap-4 m-5">
          <div>
            <img
              className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
              src={doctorData.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
            {/* doc info: name, degree, experience */}
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {doctorData.name}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {doctorData.degree} - {doctorData.speciality}
              </p>
              <button className="py-0.5 px-2 border text-sm rounded-full">
                {doctorData.experience}
              </button>
            </div>

            {/* doc about */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
                About
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {isEdit ? (
                  <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded resize-y"
                    onChange={(e) =>
                      setDoctorData((prev) => ({
                        ...prev,
                        about: e.target.value,
                      }))
                    }
                    value={doctorData.about}
                  />
                ) : (
                  doctorData.about
                )}
              </p>
            </div>
            <p className="font-medium text-gray-600 mt-4">
              Appointment fee:{" "}
              <span className="text-gray-800">
                {currency}{" "}
                {isEdit ? (
                  <input
                    type="number"
                    onChange={(e) =>
                      setDoctorData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={doctorData.fees}
                  />
                ) : (
                  doctorData.fees
                )}
              </span>
            </p>
            <div className="flex gap-2 py-2">
              <p>Address:</p>
              <p className="text-sm">
                {doctorData.address.line1} <br /> {doctorData.address.line2}
              </p>
            </div>
            <div className="flex gap-1 pt-2">
              <input
                onChange={() =>
                  isEdit &&
                  setDoctorData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={doctorData.available}
                type="checkbox"
                name=""
                id=""
              />
              <label htmlFor="">Available</label>
            </div>
            {isEdit ? (
              <button
                onClick={updateDoctorProfile}
                className="px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
