const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    companyName: String,
    role: String,
    location: String,
    stipend: String,
    applyLink: String,
    postedAt: {
        type: Date,
        default: Date.now
    }
},{timestamps : true});

module.exports = mongoose.model("Internship", internshipSchema);