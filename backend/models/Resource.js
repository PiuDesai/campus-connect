const mongoose = require("mongoose");

const resourceSchema =new mongoose.Schema({
    title: String,
    description: String,
    subject: String,
    fileUrl: String,
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps : true});


module.exports = mongoose.model("resource",resourceSchema);