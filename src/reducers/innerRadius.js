const innerRadiusReducer = (state = 160, action) => {
    switch(action.type) {
        case 'SET_INNER_RADIUS':
            return action.payload;
        default:
            return state;
    }
};

export default innerRadiusReducer;