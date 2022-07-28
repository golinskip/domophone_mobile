import {combineReducers} from 'redux';
import IntercomReducer from './IntercomReducer';

const AppReducer = combineReducers({
    intercom: IntercomReducer,
});

export default AppReducer;
