
import axios from "axios";
import React from "react";
import { FaBook, FaCalendarAlt, FaBriefcase, FaComments } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
{/* 
      <Navbar/> */}

      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 flex justify-between items-center shadow">

        <h1 className="text-2xl font-bold">CampusConnect</h1>

        <div className="space-x-6">
          <button className="hover:text-gray-200">Features</button>
          <Link to="/about">
          <button className="hover:text-gray-200">About</button>
          </Link>

          <Link to="/login">
          <button className="bg-white text-blue-600 px-4 py-1 rounded-lg">
            Login
          </button>
          </Link>

          
          <Link to="/registration">
          <button className="bg-purple-700 px-4 py-1 rounded-lg">
            Register
          </button>
          </Link>
        </div>

      </nav>


      {/* Hero Section */}

      <div className="flex flex-col items-center text-center py-20 px-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Smart Digital Platform for Your Campus
        </h1>

        <p className="text-gray-600 max-w-xl mb-6">
          CampusConnect helps students and faculty manage resources,
          events, internships, complaints, and discussions in one
          centralized digital platform.
        </p>

        <div className="space-x-4">
          <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          </Link>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
            Learn More
          </button>

        </div>

      </div>


      {/* Features */}

      <div className="px-20 pb-20">

        <h2 className="text-2xl font-bold text-center mb-10">
          Platform Features
        </h2>

        <div className="grid grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaBook className="text-blue-500 text-3xl mb-3"/>
            <h3 className="font-bold mb-1">Resources</h3>
            <p className="text-gray-500 text-sm">
              Share and download academic materials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCalendarAlt className="text-green-500 text-3xl mb-3"/>
            <h3 className="font-bold mb-1">Events</h3>
            <p className="text-gray-500 text-sm">
              Stay updated with campus activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaBriefcase className="text-purple-500 text-3xl mb-3"/>
            <h3 className="font-bold mb-1">Internships</h3>
            <p className="text-gray-500 text-sm">
              Discover internships and job opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaComments className="text-pink-500 text-3xl mb-3"/>
            <h3 className="font-bold mb-1">Forum</h3>
            <p className="text-gray-500 text-sm">
              Discuss ideas and solve academic doubts.
            </p>
          </div>

        </div>

      </div>


      {/* Footer */}

      <Footer/>

    </div>
  );
}

export default Home;