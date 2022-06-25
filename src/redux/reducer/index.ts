import {combineReducers} from 'redux';
import {imageListReducer} from './images';
import {currentImageReducer} from './currentImage';

export default combineReducers({
  images: imageListReducer,
  detail: currentImageReducer,
});
