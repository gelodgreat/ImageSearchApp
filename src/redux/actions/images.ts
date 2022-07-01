import axios from 'axios';
import {API_BASE_URL} from 'const/App.const';

export const updateImageList = (images: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_IMAGES_RESULT',
      images,
    });
  };
};

export const loadImages = (searchTerm: string, page: number) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: 'LOAD_IMAGES_START'});
      const encodedSearch = encodeURI(searchTerm);
      const url = `${API_BASE_URL}&image_type=photo&q=${encodedSearch}&page=${
        page || 1
      }`;
      const imageResults = await axios.get(url);
      dispatch({
        type: 'LOAD_IMAGES_SUCCESS',
        payload: [...imageResults.data?.hits],
      });
    } catch (error) {
      dispatch({type: 'LOAD_IMAGES_FAILURE', payload: error});
    }
  };
};

export const clearImageList = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'CLEAR_IMAGE_LIST',
    });
  };
};
