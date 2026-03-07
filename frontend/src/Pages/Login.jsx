import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {Link,useNavigate } from "react-router-dom";


  

function Login() {
  const [formData, setFormdata] = useState({
    email : "",
    password : ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name] : e.target.value
    });

  }

  const handleLogin = async () => {
    try {

      const res = await axios.post(
         "http://localhost:5000/user/login",
          formData);

          alert(res.data.Message);

          //clear input fields

          setFormdata({
            email : "",
            password : ""
          })

          const role = res.data.role;

          if(role === "student"){
            navigate("/student-dashboard");
          }

           if(role === "teacher"){
            navigate("/faculty-dashboard");
          }

           if(role === "admin"){
            navigate("/admin-dashboard");
          }

    }catch(err){
      alert(err.response?.data?.Message || "Login Failed");

    }
  }
 

  return (
    <div className="flex items-center justify-center h-screen bg-[linear-gradient(to_top,#d5d4d0_0%,#d5d4d0_1%,#eeeeec_31%,#efeeec_75%,#e9e9e7_100%)] min-h-screen">
        
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          CampusConnect Login
        </h2>

        {/* Email Input */}
        <div className="flex items-center border rounded-xl p-2 mb-4 focus-within:ring-2 focus-within:ring-purple-500 transition">
          <FaEnvelope className="text-gray-400 mx-2" />
          <input
            type="email"
            name="email"
            value = {formData.email}
            placeholder="Email"
            className="w-full outline-none px-2 py-2 rounded"
            onChange={handleChange}
          
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border rounded-xl p-2 mb-6 focus-within:ring-2 focus-within:ring-purple-500 transition">
          <FaLock className="text-gray-400 mx-2" />
          <input
            type="password"
            name="password"
             value = {formData.password}
            placeholder="Password"
            className="w-full outline-none px-2 py-2 rounded"
             onChange={handleChange}
          
          />
        </div>

        {/* Login Button */}
        <button 
        type="button"
        onClick={handleLogin}
        className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  text-white py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition duration-300">
          Login
        </button>
        
        
        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account? <Link to ="/registration"><span className="text-purple-600 cursor-pointer hover:underline">Register</span></Link>
        </p>
        
        <p className="text-center text-gray-500 mt-4 text-sm">
          Forgot password? <span className="text-purple-600 cursor-pointer hover:underline">Reset Password</span>
        </p>
      </div>

    </div>
  );
}

export default Login;