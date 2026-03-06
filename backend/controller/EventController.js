const event = require('../models/Event');

const handleEvent = (req,res) =>{
    res.send("Event page");
}

module.exports = {handleEvent};