import { combineReducers } from 'redux';
import colorsReducer from './colors';
import imagesReducer from './images';

export default combineReducers({
    colors: colorsReducer,
    images: imagesReducer
})