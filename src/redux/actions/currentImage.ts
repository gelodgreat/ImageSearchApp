export const currentImage = (detail: string | number) => {
  return dispatch => {
    dispatch({
      type: 'SET_IMAGE_DETAIL',
      detail,
    });
  };
};

export const clearCurrentImage = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_CURRENT_IMAGE',
      detail: {},
    });
  };
};
