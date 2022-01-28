export const setEvent = (ev) => {
    return{
        type: 'SET_EVENT',
        payload: ev
    };
};

export const setMainBackground = (ev) => {
    return{
        type: 'SET_MAIN_BACK',
        payload: ev
    };
};

export const setPadAngle = (ev) => {
    return{
        type: 'SET_PAD_ANGLE',
        payload: ev
    };
};

export const setInnerRadius = (ev) => {
    return{
        type: 'SET_INNER_RADIUS',
        payload: ev
    };
};

export const setOuterRadius = (ev) => {
    return{
        type: 'SET_OUTER_RADIUS',
        payload: ev
    };
};