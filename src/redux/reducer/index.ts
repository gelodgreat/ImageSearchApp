import {combineReducers} from 'redux';
import {imageListReducer} from './images';
export default combineReducers({images: imageListReducer});
