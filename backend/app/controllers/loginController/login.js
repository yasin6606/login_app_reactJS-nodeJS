const controller = require('./../controller');
const RegisterSchema = require('./../../models/registerModel');
const jwt = require('jsonwebtoken');

class loginUser extends controller {

    // login user
    login = async (req, res, next) => {
        try {
            const { username, password } = req.body;

            // create token send
            const token = jwt.sign({ username, password }, `yassin`, { algorithm: 'HS512' });

            res.json({ token, userInfo: req.userFound });
        } catch (err) {
            res.status(500).send(err.message);
        };
    }
};

module.exports = new loginUser();