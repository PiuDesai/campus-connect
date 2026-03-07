const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    },
    branch: {
        type: String
    },
    year: {
        type: String
    },
    college: {
        type: String
    },status:{
  type:String,
  enum:["active","blocked"],
  default:"active"
 }
    
},{timestamps : true});

module.exports = mongoose.model("User", userSchema);