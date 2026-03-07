import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import { FaBook, FaUsers, FaExclamationCircle, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        <div className="p-6 w-full bg-gray-50 min-h-screen">

          <h1 className="text-3xl font-bold mb-6 text-gray-700">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div onClick={()=>navigate("/admin/manage-users")} className="cursor-pointer">
              <Card title="Total Users" value="350" icon={<FaUsers />} color="bg-blue-100" />
            </div>

            <div onClick={()=>navigate("/admin/manage-resources")} className="cursor-pointer">
              <Card title="Resources" value="200" icon={<FaBook />} color="bg-green-100" />
            </div>

            <div onClick={()=>navigate("/admin/manage-complaints")} className="cursor-pointer">
              <Card title="Complaints" value="12" icon={<FaExclamationCircle />} color="bg-orange-100" />
            </div>

            <div onClick={()=>navigate("/admin/manage-events")} className="cursor-pointer">
              <Card title="Events" value="8" icon={<FaCalendarAlt />} color="bg-purple-100" />
            </div>

            <div onClick={()=>navigate("/admin/manage-internships")} className="cursor-pointer">
              <Card title="Internships" value="5" icon={<FaBriefcase />} color="bg-yellow-100" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;