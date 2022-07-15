export const currentImageReducer = (
  state = {
    detailId: '',
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_IMAGE_DETAIL': {
      return {...state, detailsId: action.detail};
    }
    case 'CLEAR_CURRENT_IMAGE': {
      return {};
    }
    default:
      return state;
  }
};
