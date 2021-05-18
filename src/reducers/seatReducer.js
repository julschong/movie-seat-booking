const seatReducer = (state = 0, action) => {
    switch (action.type) {
        case 'on':
            return state + 1;
        case 'off':
            return state - 1;
        default:
            return state;
    }
};

export default seatReducer;
