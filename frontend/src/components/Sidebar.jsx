import React, { useState } from "react";
import { 
  FaTachometerAlt, 
  FaBook, 
  FaCalendarAlt, 
  FaBriefcase, 
  FaExclamationCircle, 
  FaComments, 
  FaSearch 
} from "react-icons/fa";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Resources", icon: <FaBook /> },
    { name: "Events", icon: <FaCalendarAlt /> },
    { name: "Internships", icon: <FaBriefcase /> },
    { name: "Complaints", icon: <FaExclamationCircle /> },
    { name: "Forum", icon: <FaComments /> },
    { name: "Lost & Found", icon: <FaSearch /> },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-100 to-gray-200 h-screen p-5 shadow-lg flex flex-col">

      <h2 className="text-xl font-bold mb-8 text-gray-700">Menu</h2>

      <ul className="flex-1 space-y-3">

        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300
              ${
                active === item.name
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg"
                  : "hover:bg-purple-100 hover:text-purple-600"
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}

      </ul>

      {/* Optional Footer */}
      <div className="mt-auto pt-4 border-t border-gray-300">
        <p className="text-gray-500 text-sm">CampusConnect © 2026</p>
      </div>

    </div>
  );
}

export default Sidebar;