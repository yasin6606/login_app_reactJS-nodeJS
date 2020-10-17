const express = require('express');
const router = express.Router();

router.use('/route', require('./route'));

module.exports = router;