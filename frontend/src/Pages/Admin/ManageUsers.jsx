import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function ManageUsers() {

const [users,setUsers] = useState([]);
const [editUserId,setEditUserId] = useState(null);
const [editData,setEditData] = useState({name:"",email:""});

useEffect(()=>{
 fetchUsers();
},[]);

const fetchUsers = async()=>{
 try{
  const res = await axios.get("http://localhost:5000/admin/allusers");
  setUsers(res.data.users);
 }catch(err){
  console.log(err);
 }
}

const deleteUser = async(id)=>{
 try{
  await axios.delete(`http://localhost:5000/admin/delete/${id}`);
  fetchUsers();
 }catch(err){
  console.log(err);
 }
}

const startEdit = (user)=>{
 setEditUserId(user._id);
 setEditData({
  name:user.name || "",
  email:user.email || ""
 });
}

const cancelEdit = ()=>{
 setEditUserId(null);
 setEditData({name:"",email:""});
}

const saveUpdate = async(id)=>{
 try{

  console.log("Updating user:",editData);

  await axios.put(
   `http://localhost:5000/admin/update/${id}`,
   editData
  );

  setEditUserId(null);
  setEditData({name:"",email:""});

  fetchUsers();

 }catch(err){
  console.log(err);
 }
}

const toggleStatus = async(id)=>{
 await axios.put(`http://localhost:5000/admin/toggle-user/${id}`);
 fetchUsers();
};

return(

<div className="flex flex-col min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<div className="p-6 w-full">

<h1 className="text-2xl font-bold mb-4">Manage Users</h1>

<table className="w-full bg-white shadow">

<thead className="bg-gray-200">
<tr>
<th className="p-2">Name</th>
<th className="p-2">Email</th>
<th className="p-2">Status</th>
<th className="p-2">Action</th>
</tr>
</thead>
<tbody>

{users.map((u)=>(
<tr key={u._id} className="text-center border">

<td className="p-2">
{editUserId === u._id ? (
<input
value={editData.name}
onChange={(e)=>setEditData({...editData,name:e.target.value})}
className="border p-1"
/>
) : (
u.name
)}
</td>

<td className="p-2">
{editUserId === u._id ? (
<input
value={editData.email}
onChange={(e)=>setEditData({...editData,email:e.target.value})}
className="border p-1"
/>
) : (
u.email
)}
</td>

{/* STATUS */}

<td className="p-2">
<span className={`px-2 py-1 rounded text-white ${
u.status === "active" ? "bg-green-500" : "bg-red-500"
}`}>
{u.status}
</span>
</td>

<td className="p-2 space-x-2">

{editUserId === u._id ? (

<>
<button
onClick={()=>saveUpdate(u._id)}
className="bg-green-500 text-white px-3 py-1 rounded"
>
Save
</button>

<button
onClick={cancelEdit}
className="bg-gray-500 text-white px-3 py-1 rounded"
>
Cancel
</button>
</>

) : (

<>
<button
onClick={()=>startEdit(u)}
className="bg-indigo-500 text-white px-3 py-1 rounded"
>
Edit
</button>

<button
onClick={()=>deleteUser(u._id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

<button
onClick={()=>toggleStatus(u._id)}
className={`px-3 py-1 rounded text-white ${
u.status === "active"
? "bg-yellow-500"
: "bg-green-500"
}`}
>
{u.status === "active" ? "Block" : "Unblock"}
</button>

</>

)}

</td>

</tr>
))}

</tbody>

</table>

</div>
</div>
</div>

)

}

export default ManageUsers;