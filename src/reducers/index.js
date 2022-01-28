import eventReducer from './event';
import backgroundReducer from './backgroundImage';
import innerRadiusReducer from './innerRadius';
import outerRadiusReducer from './outerRadius';
import padAngleReducer from './padAngle';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    event: eventReducer,
    innerRadius : innerRadiusReducer,
    outerRadius: outerRadiusReducer,
    padAngle: padAngleReducer,
    background: backgroundReducer
});

export default allReducers;