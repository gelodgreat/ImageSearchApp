import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {getImages} from 'api_requests/getImages';
import {Hit, Images} from 'types/Images';
import {useDispatch, useSelector} from 'react-redux';
import {currentImage, updateImageList} from 'redux/actions';
import {useNavigation} from '@react-navigation/native';
import {Store} from 'types/Store';
import {clearImageList} from 'redux/actions/images';

const HomeContainer = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const images: Hit[] =
    useSelector((state: Store) => state.images.images) || [];

  const onNavigateImageDetails = (productDetails: Hit) => {
    dispatch(currentImage(productDetails));
    navigation.navigate('Details');
  };

  const getImageResult = async () => {
    try {
      dispatch(clearImageList());
      setLoading(true);
      const imageResults: Images = await getImages(searchTerm, page);
      console.log(images);
      dispatch(updateImageList(imageResults?.hits));
      setLoading(false);
    } catch (error) {
      console.log({error});
    }
  };

  const loadMore = async () => {
    setLoading(true);
    setPage(page + 1);
    const imageResults: Images = await getImages(searchTerm, page + 1);
    dispatch(updateImageList([...images, ...imageResults?.hits]));
    setLoading(false);
  };

  useEffect(() => {
    dispatch(clearImageList());
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    const timerId = setTimeout(() => {
      getImageResult();
    }, 800);

    setTimer(timerId);
  }, [searchTerm]);

  const generatedProps = {
    images,
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateImageDetails,
    loadMore,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
