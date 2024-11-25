import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [role, setRole] = useState("user"); // Default role: user
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handelGoogleLoginBackend = async () => {
    window.location.href = import.meta.env.VITE_BACKEND_GOOGLE_AUTH_URL;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/signup",{name,email,password,role})
    .then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Sign Up to your account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Already have an account?
          <a
            href="/login"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-violet-400"
          >
            Login here
          </a>
          .
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handelGoogleLoginBackend}
            aria-label="Login with Google"
            type="button"
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
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form onSubmit={handelSubmit} noValidate="" action="" className="space-y-8">
          <div className="space-y-4">
            
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Abhishek Ghosh"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>

                {/* later */}

                {/* <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a> */}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label htmlFor="role" className="block text-sm">
                I am a
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              >
                <option value="user">Normal User</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {/* Additional fields for Doctor */}
            {role === "doctor" && (
              <>
                <div className="space-y-2">
                  <label htmlFor="specialization" className="block text-sm">
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    id="specialization"
                    placeholder="e.g., Cardiologist"
                    required
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="license" className="block text-sm">
                    License Number
                  </label>
                  <input
                    type="text"
                    name="license"
                    id="license"
                    placeholder="Your License Number"
                    required
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  />
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-custom-color text-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
