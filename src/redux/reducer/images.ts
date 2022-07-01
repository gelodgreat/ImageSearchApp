export const imageListReducer = (
  state = {
    images: [],
    isLoading: false,
    error: null,
  },
  action: any,
) => {
  switch (action.type) {
    case 'LOAD_IMAGES_START':
      return {...state, isLoading: true};
    case 'LOAD_IMAGES_SUCCESS':
      const localImages = state?.images || [];
      return {
        ...state,
        images: [...action.payload, ...localImages],
        isLoading: false,
      };
    case 'LOAD_IMAGES_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'UPDATE_IMAGES_RESULT': {
      return {...state, images: action.images};
    }
    case 'CLEAR_IMAGE_LIST': {
      return {};
    }
    default:
      return state;
  }
};
