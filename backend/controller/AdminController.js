const user = require("../models/User");

const handleGetAllUsers = async(req,res) => {
    try{
      const u = await user.find({});
      if(!u){
        return res.status(500).json({
        Message : "User Deatils notcfetch successfully",
        success : false
        
      })
      }
      return res.status(200).json({
        Message : "User Deatils fetch successfully",
        success : true,
        users : u
      })
    }catch(err){
        return res.status(500).json({
            Message : err.message,
            success : false
        })
    }
}

const handleDeleteUser = async (req,res) =>{
try{

  const {id} = req.params;
  const deleted_user = await user.findByIdAndDelete(id);

  if(!deleted_user){
    return res.status(404).json({
    Message : "User is not found",
    success : false
  })
  }

     return res.status(200).json({
      Message: "User deleted successfully",
      success: true,
      user: deleted_user
    });

}catch(err){
  return res.status(500).json({
    Message : err.message,
    success : false
  })
}
}



const handleUpdatedUser = async (req,res) =>{
try{

  const {id} = req.params;
  const data = req.body;
  const updated_user = await user.findByIdAndUpdate(id,data,{new:true});

  if(!updated_user){
    return res.status(404).json({
    Message : "User is not found",
    success : false
  })
  }

     return res.status(200).json({
      Message: "User updated successfully",
      success: true,
      user: updated_user
    });

}catch(err){
  return res.status(500).json({
    Message : err.message,
    success : false
  })
}
}

const toggleUserStatus = async (req,res)=>{
 try{

  const {id} = req.params;

  const userData = await user.findById(id);

  if(!userData){
   return res.status(404).json({message:"User not found"});
  }

  userData.status =
   userData.status === "active" ? "blocked" : "active";

  await userData.save();

  res.json({
   success:true,
   status:userData.status
  });

 }catch(err){
  res.status(500).json({message:err.message});
 }
};
module.exports = {handleGetAllUsers,handleDeleteUser,handleUpdatedUser,toggleUserStatus};