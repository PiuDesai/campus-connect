const resources = require("../models/Resource");

const approveResource = async (req,res) => {
   try{

      const {id} = req.params;

      const resource = await Resource.findByIdAndUpdate(
         id,
         {approved:true},
         {new:true}
      );

      return res.status(200).json({
         message:"Resource Approved",
         resource
      });

   }catch(err){
      return res.status(500).json({message:"Server error"});
   }
}

const getAllResources = async (req,res) => {
    try{
        const r = resources.find([]);


    }catch(err){
         return res.status(500).json({message: err.message}); 
    }
}
module.exports = {approveResource}

//front for resources

