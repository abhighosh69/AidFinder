import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";
import Nabar from "./components/Nabar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/AdminFolder/Dashboard";
import DoctorList from "./pages/AdminFolder/DoctorList";
import AllAppointments from "./pages/AdminFolder/AllAppointments";
import AddDoctor from "./pages/AdminFolder/AddDoctor";
import UserList from "./pages/AdminFolder/UserList";
import DoctorDashboard from "./pages/DoctorFolder/DoctorDashboard";
import DoctorAppointments from "./pages/DoctorFolder/DoctorAppointments";
import DoctorProfile from "./pages/DoctorFolder/DoctorProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);

  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Nabar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          {/* Admin */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/user-list" element={<UserList />} />

          {/* Doctor */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
