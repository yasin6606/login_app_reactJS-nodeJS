const RegisterSchema = require('./../../models/registerModel');
const bcrypt = require('bcryptjs')

const check = async (req, res, next) => {
    try {
        const comparePassword = await bcrypt.compare(req.body.password, req.userFound.password);

        comparePassword ? next() : res.status(401).send('login failed');
    } catch (err) {
        res.status(403).send(err.message);
    };
};

module.exports = check;