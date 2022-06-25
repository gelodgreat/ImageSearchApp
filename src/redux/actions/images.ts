export const updateImageList = (images: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_IMAGES_RESULT',
      imageResults: images,
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
