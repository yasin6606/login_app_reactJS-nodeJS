const express = require('express');
const router = express();

router.use('/route', require('./route/routeIndex'));

module.exports = router;