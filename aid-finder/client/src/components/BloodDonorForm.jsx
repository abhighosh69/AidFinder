import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const BloodDonorForm = ({ onSuccess }) => {
  const { token } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    blood_group: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const token = localStorage.getItem("token"); // or however you're storing auth token

      const res = await axios.post(
        "http://localhost:8080/api/user/create-blood-donor",
        formData,
        {
          headers: {
            token,
          },
        }
      );

      setResponseMsg(res.data.message || "Donor registered successfully.");
      setFormData({
        name: "",
        email: "",
        phone_no: "",
        blood_group: "",
        address: "",
      });

      // ✅ Call parent callback to refresh donor list
        if (typeof onSuccess === "function") {
          onSuccess();
          console.log("Donor added. Donor list refreshed.");
        }

    } catch (err) {
      setResponseMsg(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-xl">
      {responseMsg && (
        <div className="text-center text-sm mb-4 text-blue-500">
          {responseMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="border p-2 rounded-md"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="border p-2 rounded-md"
        />
        <input
          name="phone_no"
          type="tel"
          value={formData.phone_no}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="border p-2 rounded-md"
        />
        <select
          name="blood_group"
          value={formData.blood_group}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          rows={3}
          className="border p-2 rounded-md"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white py-2 rounded-md hover:scale-105"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BloodDonorForm;
