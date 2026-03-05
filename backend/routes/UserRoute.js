const {handleCreateUser} = require('../controller/UserController')
const express = require('express');
const router = express.Router();

router.post('/createUser',handleCreateUser);
router.get('/',(req,res) =>{
    res.send("User Page")
})

module.exports = router;