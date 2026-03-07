import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import FacultyDashboard from "./Pages/Dashboard/FacultyDashboard";
import StudentDashboard from "./Pages/Dashboard/StudentDashboard";
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'
import Registration from "./Pages/Registration";
import ManageComplaints from "./Pages/Admin/ManageComplaints";
import ManageUsers from "./Pages/Admin/ManageUsers";
import ManageEvents from "./Pages/Admin/ManageEvents";
import ManageInternships from "./Pages/Admin/ManageInternships";
import ManageResources from "./Pages/Admin/ManageResources";
function App() {
  

  return (
    <>
    
    <BrowserRouter>

      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

          <Route path="/registration" element={<Registration />} />

        {/* Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />

          {/* admin functions */}
          <Route path="/admin/manage-complaints" element={<ManageComplaints/>}/>
          <Route path="/admin/manage-users" element={<ManageUsers/>}/>
          <Route path="/admin/manage-events" element={<ManageEvents/>}/>
          <Route path="/admin/manage-internships" element={<ManageInternships/>}/>
          <Route path="/admin/manage-resources" element={<ManageResources/>}/>

      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
