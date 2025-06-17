import React, { useEffect, useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assetsAdmin/assets.js";
import { AppContext } from "../../context/AppContext.jsx";

const DoctorDashboard = () => {
  const { dToken, dashData, setDashData, getDashData, cancelAppointment } =
    useContext(DoctorContext);

  const { currency, slotDateFormatter } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white shadow-md p-4 min-w-52 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-105 transition-all">
            <img className="w-16" src={assets.earning_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {" "}
                {currency} {}
                {dashData.earnings}
              </p>
              <p className="text-gray-500">Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white shadow-md p-4 min-w-52 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-105 transition-all">
            <img className="w-16" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-500">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white shadow-md p-4 min-w-52 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-105 transition-all">
            <img className="w-16" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* appointments */}
        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>
          <div className="pt-4 border border-t-0">
            {dashData &&
              dashData.latestAppointments &&
              dashData.latestAppointments.map((item, index) => (
                <div
                  className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
                  key={index}
                >
                  <img
                    className="rounded-full w-10"
                    src={item.userData.image}
                    alt=""
                  />
                  <div className="flex-1 text-sm">
                    <p className="text-gray-800 font-medium">
                      {item.userData.name}
                    </p>
                    <p className="text-gray-600 ">
                      {slotDateFormatter(item.slotDate)}
                    </p>
                  </div>
                  {item.cancelled ? (
                    <p className="text-red-500">Canceled</p>
                  ) : (
                    <p className="text-green-500">Not Completed</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
