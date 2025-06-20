import React from "react";
import { bloodBanks} from "../assets/assetsFrontend/assets.js"

const BloodBankDirectory = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-primary text-white text-left">
            <th className="px-4 py-2 border">Sl No.</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Contact</th>
            <th className="px-4 py-2 border">Address</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bank, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-blue-100`}
            >
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{bank.name}</td>
              <td className="px-4 py-2 border">{bank.contact}</td>
              <td className="px-4 py-2 border">{bank.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodBankDirectory;
