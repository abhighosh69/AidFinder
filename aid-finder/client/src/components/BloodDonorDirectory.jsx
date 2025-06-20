import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FaTint, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const BloodDonorDirectory = () => {
  const { bloodDonors, loadingBloodDonors } = useContext(AppContext);
  const [selectedGroup, setSelectedGroup] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  // Filter logic
  const filteredDonors = selectedGroup
    ? bloodDonors.filter((donor) => donor.blood_group === selectedGroup)
    : bloodDonors;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="border border-gray-300 p-2 rounded-md shadow-sm"
        >
          <option value="">All Blood Groups</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      {loadingBloodDonors ? (
        <p className="text-center text-gray-500">Loading donors...</p>
      ) : filteredDonors.length === 0 ? (
        <p className="text-center text-gray-500">No donors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <div
              key={donor._id}
              className="border p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-red-700">{donor.name}</h3>
              <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <FaTint className="text-red-500" />
                <strong className="text-black">{donor.blood_group}</strong>
              </p>
              <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <FaMapMarkerAlt className="text-blue-500" />
                {donor.address}
              </p>
              <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <FaPhoneAlt className="text-green-500" />
                <a href={`tel:${donor.phone_no}`} className="hover:underline">
                  {donor.phone_no}
                </a>
              </p>
              <p className="text-sm mt-1 text-gray-500 italic">
                <a href={`mailto:${donor.email}`} className="hover:underline">
                  {donor.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodDonorDirectory;
