import React, { useState } from "react";
import { FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  backdrop-blur-md shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-300 transition duration-300">
          CampusConnect
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li className="hover:text-yellow-300 hover:scale-105 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 hover:scale-105 transition duration-300 cursor-pointer">Resources</li>
          <li className="hover:text-yellow-300 hover:scale-105 transition duration-300 cursor-pointer">Events</li>
          <li className="hover:text-yellow-300 hover:scale-105 transition duration-300 cursor-pointer">Internships</li>
          <li className="hover:text-yellow-300 hover:scale-105 transition duration-300 cursor-pointer">Forum</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-5">

          {/* Notification Bell */}
          <button className="relative hover:text-yellow-300 transition duration-300">
            <FaBell size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-xs w-4 h-4 flex items-center justify-center animate-pulse">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <FaUserCircle size={26} />
              <span>Profile</span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-xl overflow-hidden">
                <ul>
                  <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">My Account</li>
                  <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600 font-semibold">Logout</li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 space-y-3 font-semibold">
          <li className="hover:text-yellow-300 transition cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 transition cursor-pointer">Resources</li>
          <li className="hover:text-yellow-300 transition cursor-pointer">Events</li>
          <li className="hover:text-yellow-300 transition cursor-pointer">Internships</li>
          <li className="hover:text-yellow-300 transition cursor-pointer">Forum</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;