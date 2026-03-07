import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import { FaBook, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

function FacultyDashboard() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        <div className="p-6 w-full bg-gray-50 min-h-screen">

          <h1 className="text-3xl font-bold mb-6 text-gray-700">
            Faculty Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card title="Upload Resources" value="20" icon={<FaBook />} color="bg-blue-100" />

            <Card title="Events Managed" value="5" icon={<FaCalendarAlt />} color="bg-green-100" />

            <Card title="Internship Posts" value="10" icon={<FaBriefcase />} color="bg-purple-100" />

          </div>

        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;