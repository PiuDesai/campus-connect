const user = require('../models/User');

const handleCreateUser = async (req,res) =>{
    try{
    const data = req.body;

    if(!data.name || !data.email ||! data.password || !data.role ||!data.branch || !data.year ){
      return res.status(400).json({
        Message : "all fileds are required",
        success : false
      })
    }
    

    const newUser = await user.create(data); 

    if(newUser){
        return res.status(200).json({
            Message : "User Created Successfully",
            New_User : newUser,
            success:true
        })
    }
}catch(err){
    return res.status(500).json({
        Message : err.message,
        success : false
    })
}


}

module.exports = {handleCreateUser};