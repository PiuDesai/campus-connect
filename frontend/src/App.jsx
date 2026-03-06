import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'
import Registration from "./Pages/Registration";
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
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
