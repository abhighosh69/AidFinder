import React from 'react'

const Doneters = () => {
  
  const bloodBanks = [
    {
      name: "Kothari Medical Centre Blood Bank",
      contact: "+91 86977 08130, +91 83350 61403",
      address: "8/3, Alipore Road, Kolkata-700027",
    },
    {
      name: "Ruby General Hospital Blood Centre",
      contact: "+91 98313 44466",
      address: "E.M. Bypass, Anandapur, Kolkata",
    },
    {
      name: "Life Care Blood Centre",
      contact: "+91 93310 58408",
      address: "11/A, Sarat Bose Road, Kolkata",
    },
    {
      name: "Tata Medical Center Blood Bank",
      contact: "+91 33 6605 7603, +91 33 6605 7615",
      address: "Rajarhat, Kolkata",
    },
    {
      name: "Marwari Relief Society Blood Bank",
      contact: "+91 33 2241 3140",
      address: "227, Rabindra Sarani, Kolkata-700007",
    },
    {
      name: "SJAS Blood Centre",
      contact: "+91 33 2422 8454",
      address: "Jadavpur, Kolkata",
    },
    {
      name: "Miracare Hospital Blood Bank",
      contact: "+91 33 2417 2535",
      address: "Tollygunge, Kolkata",
    },
    {
      name: "Shristi Blood Center",
      contact: "+91 33 2555 7878",
      address: "Maniktala, Kolkata",
    },
    {
      name: "Apollo Gleneagles Hospitals Blood Bank",
      contact: "+91 33 2320 3040",
      address: "Canal Circular Road, Kolkata",
    },
    {
      name: "AMRI Hospitals Blood Bank",
      contact: "+91 33 2431 7070",
      address: "Dhakuria, Kolkata",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Blood Bank Directory</h1>
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

export default Doneters