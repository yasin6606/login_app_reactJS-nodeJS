const express = require('express');
const router = express();

router.use('/register', require('./register/register'));

module.exports = router;