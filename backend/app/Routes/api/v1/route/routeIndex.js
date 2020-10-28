const express = require('express');
const router = express();

router.use('/register', require('./register/register'));

router.use('/login', require('./login/login'));

module.exports = router;