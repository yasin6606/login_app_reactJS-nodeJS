const controller = require('./../controller');

class login extends controller {

    // send token to frontend
    sendToken = async (req, res, next) => {
        const { username, password } = req.body;
        
    };
};

module.exports = new login();