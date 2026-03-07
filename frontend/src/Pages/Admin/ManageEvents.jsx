import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ManageEvents(){

return(

<div className="flex flex-col min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<div className="p-6 w-full">

<h1 className="text-2xl font-bold mb-4">
Manage Events
</h1>

<p>Create or delete events.</p>

</div>

</div>
</div>

)

}

export default ManageEvents;