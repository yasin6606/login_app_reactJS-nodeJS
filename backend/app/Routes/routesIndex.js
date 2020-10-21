const express = require('express');
const router = express();

router.use('/api', require('./api/apiIndex'));

module.exports = router;