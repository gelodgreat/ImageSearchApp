export const imageListReducer = (
  state = {
    imageResults: {},
    loading: true,
  },
  action: any,
) => {
  switch (action.type) {
    case 'UPDATE_IMAGES_RESULT': {
      return {...state, imageResults: action.imageResults, loading: false};
    }
    case 'CLEAR_CART': {
      return {};
    }
    default:
      return state;
  }
};
