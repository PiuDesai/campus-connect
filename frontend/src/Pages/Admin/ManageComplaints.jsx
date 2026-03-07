import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
function ManageComplaints(){

return(

<div className="flex flex-col min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<div className="p-6 w-full">

<h1 className="text-2xl font-bold mb-4">
Manage Complaints
</h1>

<p>Admin can resolve complaints.</p>

</div>

</div>
</div>

)

}

export default ManageComplaints;