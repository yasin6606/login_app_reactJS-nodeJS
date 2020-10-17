const init = {

};

const reducer = (state = init, action) => {
    switch (action.type) {
        case 'SHOWALERT':
            return {
                mode: action.mode,
                icon: action.icon,
                text: action.text,
            };
        default:
            return false
    }
}

module.exports = reducer;