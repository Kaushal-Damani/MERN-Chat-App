import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email,
        oldPassword,
        newPassword,
        confirmPassword,
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/users/change-password",
        formData
      );

      toast.success(response.data.message);
    } catch (error) {
      console.log("🚀 ~ onsubmit ~ error:", error);
      toast.error(error.response.data.message);
    }
    
    setEmail("")
    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  };

  return (
    <div className="flex justify-center p-[100px] container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="box-border h-32 w-[320px] sm:w-full sm:max-w-md p-4 ">
        <div className="mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-20 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
            alt="Workflow"
          />
          <h2 className="p-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Reset Password
          </h2>
        </div>

        <div className="flex flex-col space-y-4 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="name"
              placeholder="email"
              type="text"
              required=""
              value={email}
              className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="Password"
              placeholder="old Password"
              type="password"
              required=""
              value={oldPassword}
              className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="name"
              placeholder="new Password"
              type="text"
              required=""
              value={newPassword}
              className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="name"
              placeholder="confirm Password"
              type="text"
              required=""
              value={confirmPassword}
              className="text-black font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                onClick={onsubmit}
              >
                Update Password
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
