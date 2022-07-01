export const imageListReducer = (
  state = {
    images: {},
  },
  action: any,
) => {
  switch (action.type) {
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
