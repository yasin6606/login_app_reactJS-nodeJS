const RegisterSchema = require('./../../models/registerModel');

const check = async (req, res, next) => {
    try {
        const checkUsername = await RegisterSchema.findOne({ username: req.body.username });

        if (!checkUsername) throw new Error('login failed');

        req.userFound = checkUsername;

        next();
    } catch (err) {
        res.status(403).send(err.message);
    };
};

module.exports = check;