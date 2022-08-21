import counterReducer from "./counterReducer";
import isloggedReducer from "./isloggedReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counterReducer,
    isloggedReducer
})

export default allReducers;