const autoBind = require('auto-bind');

class controllersBind {
    constructor() {
        autoBind(this)
    };
};

module.exports = controllersBind;