import React, {useMemo} from 'react';
import ImageDetailsScreen from './ImageDetails.view';
import {useSelector} from 'react-redux';
import {Store} from 'types/Store';

const ImageDetailsContainer = (props: any) => {
  const detailsId =
    useSelector((state: Store) => state.detail?.detailsId) || '';
  const images = useSelector((state: Store) => state.images.images) || [];
  const details = useMemo(
    () => images.find(list => list.id === detailsId),
    [detailsId, images],
  );
  const generatedProps = {details};

  return <ImageDetailsScreen {...generatedProps} {...props} />;
};
export default ImageDetailsContainer;
