import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const UserList = () => {
  const { getAllUsers, users, aToken } = useContext(AdminContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    if (aToken) {
      getAllUsers();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Users</h1>
      <div className="flex flex-wrap gap-4 p-4">
        {(users || []).map((item, index) => (
          <div
            onClick={() => {
              setSelectedUser(item);
              setMoreInfo(false); // Reset moreInfo when opening new user
            }}
            className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
            key={index}
          >
            <img
              className="w-full h-36 object-cover bg-indigo-50 group-hover:bg-primary transition-all duration-500"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">
                {item.name}
              </p>
              <p className="text-zinc-600 text-sm">{item.email}</p>
            </div>
          </div>
        ))}

        {selectedUser && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={() => setSelectedUser(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">
                {selectedUser.name}
              </h2>
              <p className="text-center text-gray-600">{selectedUser.email}</p>
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>
                  <strong>ID:</strong> {selectedUser._id}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedUser.phone || "N/A"}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedUser.gender || "N/A"}
                </p>
                <p>
                  <strong>Address:</strong> {selectedUser.address.line1 || "N/A"}, {selectedUser.address.line2 || "N/A"}
                </p>
                <p>
                  <strong>DOB:</strong> {selectedUser.dob || "N/A"}
                </p>

                {/* More Info / Less Info Toggle */}
                {moreInfo ? (
                  <>
                    <div className="mt-2 space-y-1">
                      <p>
                        <strong>Created At:</strong>{" "}
                        {new Date(selectedUser.createdAt).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Updated At:</strong>{" "}
                        {new Date(selectedUser.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      className="mt-2 text-sm text-blue-600 hover:underline"
                      onClick={() => setMoreInfo(false)}
                    >
                      Less Info
                    </button>
                  </>
                ) : (
                  <button
                    className="mt-2 text-sm text-blue-600 hover:underline"
                    onClick={() => setMoreInfo(true)}
                  >
                    More Info
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
