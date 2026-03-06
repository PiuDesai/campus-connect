import axios from "axios";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaUniversity } from "react-icons/fa";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    branch: "",
    year: "",
    college: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
     const handleRegistration = async () => {
  try {

    const res = await axios.post(
      "http://localhost:5000/user/createUser",
      formData
    );

    alert(res.data.Message); // from backend

  } catch (err) {

    alert(err.response?.data?.Message || "Registration Failed");

  }
  console.log(formData);
};

  return (

    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          CampusConnect Register
        </h2>

        {/* Name */}
        <div className="flex items-center border rounded-xl p-2 mb-4 focus-within:ring-2 focus-within:ring-purple-500">
          <FaUser className="text-gray-400 mx-2"/>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full outline-none px-2 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-xl p-2 mb-4 focus-within:ring-2 focus-within:ring-purple-500">
          <FaEnvelope className="text-gray-400 mx-2"/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full outline-none px-2 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded-xl p-2 mb-4 focus-within:ring-2 focus-within:ring-purple-500">
          <FaLock className="text-gray-400 mx-2"/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full outline-none px-2 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Role */}
        <select
          name="role"
          className="w-full border p-2 mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        {/* Branch */}
        <input
          type="text"
          name="branch"
          placeholder="Branch (CSE, IT, Mechanical)"
          className="w-full border p-2 mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
          onChange={handleChange}
        />

        {/* Year */}
        <select
          name="year"
          className="w-full border p-2 mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
          onChange={handleChange}
        >
          <option value="">Select Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        {/* College */}
        <div className="flex items-center border rounded-xl p-2 mb-6 focus-within:ring-2 focus-within:ring-purple-500">
          <FaUniversity className="text-gray-400 mx-2"/>
          <input
            type="text"
            name="college"
            placeholder="College Name"
            className="w-full outline-none px-2 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Register Button */}
        <button 
        onClick={handleRegistration}
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;