const backgroundReducer = (state = 'linear-gradient(to bottom, #2C5364, #203A43, #0F2027)', action) => {
    switch(action.type){
        case 'SET_MAIN_BACK':
            return action.payload;
        case 'CLEAR_MAIN_BACK':
            return '';
        default:
            return state;
    }
};

export default backgroundReducer;