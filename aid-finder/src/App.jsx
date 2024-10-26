import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donner from "./pages/Donner";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element ={<Hospitals/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donner" element={<Donner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default App;
