import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user"); // Default role: user;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleUserTypeChange = (e) => {
    setRole(e.target.value);
  };

  const handelGoogleLoginBackend = async () => {
    window.location.href = import.meta.env.VITE_BACKEND_GOOGLE_AUTH_URL;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email, password, role })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Login successful") {
          if (role === "user") {
            navigate("/home");
          } else if (role === "doctor") {
            navigate("/admin-doctor");
          }
        } else {
          console.log("Unexpected response:", result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="mb-3 text-3xl font-semibold text-center">Login</h1>
        <form
          onSubmit={handelSubmit}
          noValidate=""
          action=""
          className="space-y-6"
        >
          {/* User Type Selection */}
          <div className="space-y-1 text-sm">
            <label htmlFor="role" className="block text-gray-400">
              Select User Type
            </label>
            <div className="flex space-x-8">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  id="user"
                  value="user"
                  checked={role === "user"}
                  onChange={handleUserTypeChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="normal"
                  className="peer-checked:bg-gradient-custom-color peer-checked:text-gray-900 cursor-pointer text-gray-400 font-semibold py-2 px-4 rounded-full border-2 border-gray-700 transition duration-300 ease-in-out hover:bg-gradient-custom-color hover:text-gray-900"
                >
                  Normal User
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  id="doctor"
                  value="doctor"
                  checked={role === "doctor"}
                  onChange={handleUserTypeChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="doctor"
                  className="peer-checked:bg-gradient-custom-color peer-checked:text-gray-900 cursor-pointer text-gray-400 font-semibold py-2 px-4 rounded-full border-2 border-gray-700 transition duration-300 ease-in-out hover:bg-gradient-custom-color hover:text-gray-900"
                >
                  Doctor
                </label>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            {/* <div className="flex justify-end text-xs text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div> */}
          </div>

          {/* Login Button */}
          <button className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-custom-color text-gray-900">
            Sign in
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Login with Google"
            type="button"
            onClick={handelGoogleLoginBackend}
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="/sign-up"
            className="underline text-gray-100"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
