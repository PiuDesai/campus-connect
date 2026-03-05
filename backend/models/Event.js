const mongoose = require("mongoose");

const eventScheme =new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    location: String,
    organizer: String
},{timestamps : true})

module.exports = mongoose.model('Event',eventScheme);