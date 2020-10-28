const express = require('express');
const router = express();

// controllers
const controllerLogin = require('./../../../../../controllers/loginController/login');

// middleware
const middlewareUsernameLogin = require('./../../../../../middleware/login/usernameCheck');
const middlewarePasswordLogin = require('./../../../../../middleware/login/passwordCheck');

router.post('/', middlewareUsernameLogin, middlewarePasswordLogin, controllerLogin.login);

module.exports = router;