const seatReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'add':
            return { value: state.value + 1 };
        case 'subtract':
            return { value: state.value - 1 };
        default:
            return state;
    }
};

export default seatReducer;
