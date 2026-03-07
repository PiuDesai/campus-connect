const { handleGetAllUsers, handleDeleteUser,handleUpdatedUser,toggleUserStatus } = require("../controller/AdminController");
const express = require("express");
const { handleUpdateUser } = require("../controller/UserController");
const router = express.Router();


router.get("/allusers",handleGetAllUsers);
router.delete("/delete/:id",handleDeleteUser);
router.put("/update/:id",handleUpdatedUser);
router.put("/toggle-user/:id", toggleUserStatus);


module.exports = router;