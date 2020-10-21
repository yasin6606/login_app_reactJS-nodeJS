const express = require('express');
const router = express();

router.post('/', (req, res) => {
    console.log('show first request');
})

module.exports = router;