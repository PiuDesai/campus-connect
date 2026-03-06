import React from "react";

function Card({ title, value, icon, color }) {
  return (
    <div className={`${color} 
    p-6 rounded-xl shadow-md 
    hover:shadow-lg hover:scale-105 
    transition duration-300 cursor-pointer 
    flex items-center space-x-4`}>

      {/* Icon */}
      <div className="text-3xl text-gray-700 bg-white p-3 rounded-lg shadow-sm">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-gray-600 text-lg">{title}</h2>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>

    </div>
  );
}

export default Card;