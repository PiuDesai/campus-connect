const mongoose = require('mongoose');


const Database = async  () => {
      await mongoose.connect("mongodb://localhost:27017/campus_connect").
      then((res) =>{
        console.log("DataBase Connect Succesfully..!");
        
      })
      .catch((err) =>{
        console.log(err);
        
      })
}

module.exports = Database;