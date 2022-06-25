export const imageListReducer = (
  state = {
    images: {},
    loading: true,
  },
  action: any,
) => {
  switch (action.type) {
    case 'UPDATE_IMAGES_RESULT': {
      return {...state, images: action.images, loading: false};
    }
    case 'CLEAR_IMAGE_LIST': {
      return {};
    }
    default:
      return state;
  }
};
