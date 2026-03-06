import React from "react";
import { FaUsers, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header Section */}

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 text-center">

        <h1 className="text-4xl font-bold mb-3">
          About CampusConnect
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          CampusConnect is a modern digital platform designed to
          connect students, faculty, and administrators in one
          centralized system for managing academic resources,
          events, internships, discussions, and more.
        </p>

      </div>

      {/* About Description */}

      <div className="px-16 py-16 grid grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Why CampusConnect?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Many colleges use multiple platforms for notices,
            resources, and events which creates confusion and
            poor communication. CampusConnect solves this problem
            by providing a single platform where students and
            faculty can collaborate, share knowledge, and stay
            updated with campus activities.
          </p>

        </div>

        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold mb-3">
            Platform Highlights
          </h3>

          <ul className="text-gray-600 space-y-2">

            <li>✔ Academic Resource Sharing</li>
            <li>✔ Event Management System</li>
            <li>✔ Internship Opportunities</li>
            <li>✔ Complaint & Feedback System</li>
            <li>✔ Discussion Forum</li>
            <li>✔ Lost & Found System</li>

          </ul>

        </div>

      </div>


      {/* Mission Section */}

      <div className="px-16 pb-16">

        <h2 className="text-2xl font-bold text-center mb-10">
          Our Mission
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">

            <FaUsers className="text-blue-500 text-4xl mx-auto mb-3"/>

            <h3 className="font-semibold mb-2">
              Connect Campus
            </h3>

            <p className="text-gray-500 text-sm">
              Bring students and faculty together through one
              unified platform.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">

            <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-3"/>

            <h3 className="font-semibold mb-2">
              Smart Communication
            </h3>

            <p className="text-gray-500 text-sm">
              Improve communication and collaboration in college.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">

            <FaLaptopCode className="text-purple-500 text-4xl mx-auto mb-3"/>

            <h3 className="font-semibold mb-2">
              Digital Transformation
            </h3>

            <p className="text-gray-500 text-sm">
              Transform traditional campus management into a
              modern digital experience.
            </p>

          </div>

        </div>

      </div>


      {/* Footer */}
      <Footer/>

     

    </div>
  );
}

export default About;