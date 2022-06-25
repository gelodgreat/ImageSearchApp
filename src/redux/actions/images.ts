export const updateImageList = (images: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_IMAGES_RESULT',
      images,
    });
  };
};

export const clearImageList = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'CLEAR_IMAGE_LIST',
    });
  };
};
