const padAngleReducer = (state = 8, action) => {
    switch(action.type) {
        case 'SET_PAD_ANGLE':
            return action.payload;
        default:
            return state;
    }
};

export default padAngleReducer;
