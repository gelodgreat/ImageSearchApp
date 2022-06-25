import axios from 'axios';
import {API_BASE_URL} from '../const/App.const';

export const getImages = async (searchTerm: string) => {
  try {
    const encodedSearch = encodeURI(searchTerm);

    const imageResults = await axios.get(
      `${API_BASE_URL}&image_type=photo&q=${encodedSearch}`,
    );
    return imageResults.data;
  } catch (error) {
    return error;
  }
};
