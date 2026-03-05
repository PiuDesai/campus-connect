const express = require('express');
const Database = require('./config/db');
const UserRoute = require('./routes/UserRoute');
const app =express();

app.use(express.json());
Database();

app.use('/user',UserRoute);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    
})