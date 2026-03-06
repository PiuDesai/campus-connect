const express = require('express');
const Database = require('./config/db');
const cors = require("cors");
const UserRoute = require('./routes/UserRoute');
const EventRoute = require('./routes/EventRoute');
const app =express();

app.use(cors());
app.use(express.json());

Database();

app.use('/user',UserRoute);
app.use('/event',EventRoute);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    
})