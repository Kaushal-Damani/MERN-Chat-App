import React, { useState } from "react";
import axios from "axios";
import { EyeOff, Eye } from "lucide-react";
import { toast } from "react-toastify";

export default function SiignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        formData
      );
      setLoading(false);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }

    setUserName("");
    setEmail("");
    setPassword("");
    setAvatar("");
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#">
              <div className="mt-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    name="username"
                    placeholder="John Doe"
                    type="text"
                    required=""
                    value={username}
                    className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required=""
                    value={email}
                    className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    autoComplete="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required=""
                    className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="mt-[250px] mr-[90px] absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility} // Toggle password visibility on click
                  >
                    {showPassword ? (
                      <EyeOff color="black" />
                    ) : (
                      <Eye color="black" />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Avatar
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="avatar"
                    type="file"
                    required=""
                    accept="image/*"
                    className="appearance-none text-black font-bold block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={onsubmit}
                    isloading="false"
                  >
                    Create account
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
