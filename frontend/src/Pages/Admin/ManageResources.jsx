import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ManageResources(){
//    const [resources,setresources] = useState([]);

//    useEffect(()=>{
//     fetchResources();
//    },[]);

//    const fetchResources = () => {
//     axios.get("")
//    }
//     const approveResource = 

return(

<div className="flex flex-col min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<div className="p-6 w-full">

<h1 className="text-2xl font-bold mb-4">
Manage Resources
</h1>

<p>Admin can approve or delete resources.</p>

</div>

</div>
</div>

)

}

export default ManageResources;