export const currentImageReducer = (
  state = {
    detail: {},
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_IMAGE_DETAIL': {
      return {...state, ...action.detail};
    }
    case 'CLEAR_CURRENT_IMAGE': {
      return {};
    }
    default:
      return state;
  }
};
