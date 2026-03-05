const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps : true});

module.exports = mongoose.model("Complaint", complaintSchema);