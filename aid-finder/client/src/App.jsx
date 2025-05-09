import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doneters from "./pages/Doneters";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Doctor from "./pages/Doctor";
import BookAppointments from "./pages/BookAppointments";
import SignUp from "./pages/SignUp";
import Chatbot from "./pages/Chatbot";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppointments from "./pages/MyAppointments";


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donner" element={<Doneters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/book-appointment/:docId" element={<BookAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
