const {handleCreateUser,handleAllUserList,handleLogin,handleUpdateUser} = require('../controller/UserController')
const express = require('express');
const router = express.Router();

router.get('/getalluser',handleAllUserList)
router.post('/createUser',handleCreateUser);
router.post('/login',handleLogin);
router.put('/update',handleUpdateUser);
router.get('/',(req,res) =>{
    res.send("User Page")
})

module.exports = router;