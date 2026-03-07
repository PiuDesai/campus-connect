const express = require('express');
const Database = require('./config/db');
const cors = require("cors");
const UserRoute = require('./routes/UserRoute');
const EventRoute = require('./routes/EventRoute');
const AdminRoute = require('./routes/AdminRoute');
const ResourcesRoute = require("./routes/ResourcesRoute");
const app =express();

app.use(cors());
app.use(express.json());

Database();

app.use('/user',UserRoute);
app.use('/event',EventRoute);
app.use('/admin',AdminRoute);
app.use('/resources',ResourcesRoute);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    
})