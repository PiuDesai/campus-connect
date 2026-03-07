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

    // check email already exists
    const existingUser = await user.findOne({ email: data.email });

    if (existingUser) {
        
        
      return res.status(400).json({
        Message: "User already exists",
        success: false
      });
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


const handleAllUserList = async (req,res) => {
    try{
        const u = await user.find({});

        if(u){
            return res.status(200).json({
                Message : "data fetch successfully",
                success : true,
                users : u
            })
          return res.status(400).json({
          Message : "data  not fetch",
          success : false
      })
        }}catch(err){
            return res.status(400).json({
          Message : "data  not fetch",
          success : false
        })
    }
}

const handleLogin = async (req,res) => {
    try{
       const {email,password} = req.body;

       if(!email || !password){
        return res.status(400).json({
            Message : "Please enter both email and password",
            success : false
        })
       }

       const u =await user.findOne({email});

       if(!u){
         return res.json({message:"User not found"});
       }

       if(u.password !== password){
         return res.json({message:"Invalid Password"});
       }

       return res.status(200).json({
        Message : "Login Successfully",
        success : true,
        role : u.role
       })

    }catch(err){
        return res.status(500).json({
            Message : err.message,
            susccess : false
        })
    }
}

const handleUpdateUser = async (req,res) =>{
     try{
        const {_id} = req.body;
        const u =await user.findByIdAndUpdate(_id,req.body,{new : true});

        if(!u){
              return res.status(404).json({
                Message : "User not found",
                success : false
            })

        }

       return res.status(200).json({
        Message : "User updated successfully",
        success : true
       }) 

     }catch(err){
        return res.status(500).json({
            Message : err.message,
            success : false
        })
     }
}


module.exports = {handleCreateUser,handleAllUserList,handleLogin,handleUpdateUser};