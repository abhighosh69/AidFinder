import React, { useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assetsAdmin/assets.js";

const AllAppointments = () => {
  const { getAllAppointments, appointments, aToken, cancelAppointment } =
    useContext(AdminContext);

  const { calculateAge, slotDateFormatter, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>name</p>
          <p>age</p>
          <p>date & time</p>
          <p>doctor</p>
          <p>fees</p>
          <p>action</p>
        </div>
        {[...appointments].reverse().map(
          (item, index) => (
            console.log(item),
            (
              <div
                className="felx flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
                key={index}
              >
                <p className="max-sm:hidden">{index + 1}</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-8 rounded-full"
                    src={item.userData.image}
                    alt="user image"
                  />{" "}
                  <p>{item.userData.name}</p>
                </div>
                <p className="max-sm:hidden">
                  {calculateAge(item.userData.dob) || " NA "}
                </p>
                <p>
                  {slotDateFormatter(item.slotDate)}, {item.slotTime}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-8 rounded-full bg-gray-200"
                    src={item.docData.image}
                    alt="user image"
                  />{" "}
                  <p>{item.docData.name}</p>
                </div>
                <p>
                  {currency}
                  {item.amount}
                </p>
                {item.cancelled ? (
                  <p className="text-red-500">Canceled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-400 text-xs font-medium">Completed</p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-10 cursor-pointer"
                    src={assets.cancel_icon}
                    alt="cancel button"
                  />
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllAppointments;
