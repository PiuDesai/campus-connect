import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ManageInternships(){

return(

<div className="flex flex-col min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<div className="p-6 w-full">

<h1 className="text-2xl font-bold mb-4">
Manage Internships
</h1>

<p>Admin can post internship opportunities.</p>

</div>

</div>
</div>

)

}

export default ManageInternships;