const express = require('express');
const router = express.Router();

// controllers
const loginController = require('./../../../../../controllers/loginC/loginController');

router.post('/', loginController.sendToken);

module.exports = router;