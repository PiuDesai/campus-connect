const {approveResource} = require("../controller/ResourcesController");
const express = require("express");
const router = express.Router();

router.put("/approve/:id", approveResource);

module.exports = router;