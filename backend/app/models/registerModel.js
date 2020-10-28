const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const register = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Register', register);