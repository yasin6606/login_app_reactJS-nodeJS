const express = require('express');
const router = express();

const controllerRegister = require('./../../../../../controllers/registerController/register');

router.post('/check/username', controllerRegister.checkUsername);

router.post('/', controllerRegister.newRegister);

module.exports = router;