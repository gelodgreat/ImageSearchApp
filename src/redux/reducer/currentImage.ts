export const currentImageReducer = (
  state = {
    detail: {},
    loading: true,
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_IMAGE_DETAIL': {
      return {...state, detail: action.detail, loading: false};
    }
    case 'CLEAR_CURRENT_IMAGE': {
      return {};
    }
    default:
      return state;
  }
};
