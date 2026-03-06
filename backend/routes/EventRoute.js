const express = require('express');
const { handleEvent } = require('../controller/EventController');
const router = express.Router();

router.get("/",handleEvent);

module.exports = router;