const controller = require('./../controller');
const RegisterSchema = require('./../../models/registerModel');

class loginUser extends controller {

    // login user
    login = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            // create token send

            res.json({ token: login });
        } catch (err) {
            res.status(500).send(err.message);
        };
    }
};

module.exports = new loginUser();