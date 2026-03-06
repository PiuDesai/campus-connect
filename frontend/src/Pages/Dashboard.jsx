import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { FaBook, FaCalendarAlt, FaBriefcase, FaExclamationCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="p-6 w-full bg-gray-50 min-h-screen">

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-6 text-gray-700">Dashboard</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <Card 
              title="Resources" 
              value="120" 
              icon={<FaBook />} 
              color="bg-blue-100"
            />

            <Card 
              title="Events" 
              value="8" 
              icon={<FaCalendarAlt />} 
              color="bg-green-100"
            />

            <Card 
              title="Internships" 
              value="15" 
              icon={<FaBriefcase />} 
              color="bg-purple-100"
            />

            <Card 
              title="Complaints" 
              value="3" 
              icon={<FaExclamationCircle />} 
              color="bg-orange-100"
            />

          </div>

          {/* Latest Events */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Latest Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="p-4 rounded-xl bg-blue-500 text-white shadow-md hover:scale-105 transition cursor-pointer">
                <h3 className="font-bold text-lg">Tech Fest</h3>
                <p className="text-sm mt-1">12th March 2026</p>
              </div>

              <div className="p-4 rounded-xl bg-green-500 text-white shadow-md hover:scale-105 transition cursor-pointer">
                <h3 className="font-bold text-lg">Coding Workshop</h3>
                <p className="text-sm mt-1">15th March 2026</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;