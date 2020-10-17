const express = require('express');
const router = express.Router();

router.use('/login', require('./login/login'));

module.exports = router;