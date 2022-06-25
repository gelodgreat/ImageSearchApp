import React from 'react';
import ImageDetailsScreen from './ImageDetails.view';
import {useSelector} from 'react-redux';
import {Store} from 'types/Store';

const ImageDetailsContainer = (props: any) => {
  const details = useSelector((state: Store) => state.detail.detail) || {};
  const generatedProps = {};

  return <ImageDetailsScreen {...generatedProps} {...props} />;
};
export default ImageDetailsContainer;