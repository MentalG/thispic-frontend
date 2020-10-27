import { combineReducers } from 'redux';
import colorsReducer from './colors';
import imagesReducer from './images';
import authReducer from './auth';

export default combineReducers({
    colors: colorsReducer,
    images: imagesReducer,
    auth  : authReducer
})