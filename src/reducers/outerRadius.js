const outerRadiusReducer = (state = 1, action) => {
    switch(action.type) {
        case 'SET_OUTER_RADIUS':
            return action.payload;
        default:
            return state;
    }
};

export default outerRadiusReducer;