const controller = require('./../controller');
const RegisterSchema = require('./../../models/registerModel');
const bcrypt = require('bcryptjs');

class registerClass extends controller {

    // check incoming username
    checkUsername = async (req, res) => {
        try {
            const check = await RegisterSchema.exists({ username: req.body.username });

            res.send(check);

        } catch (err) {
            res.status(500).send(err.message);
        };
    };

    // new user register 
    newRegister = async (req, res, next) => {
        try {
            const { firstName, lastName, username, password } = req.body;

            const passwordHashed = await bcrypt.hash(password, 12);

            const newReg = new RegisterSchema({
                firstName,
                lastName,
                username,
                password: passwordHashed,
            });

            const saved = await newReg.save();

            if (!saved) return res.status(401).send('user can not save');

            res.json({ result: 'saved' });
        } catch (err) {
            res.status(500).send(err.message);
        };
    };
};

module.exports = new registerClass();