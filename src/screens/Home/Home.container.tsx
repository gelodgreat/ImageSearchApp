import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {getImages} from 'api_requests/getImages';
import {Hit, Images} from 'types/Images';
import {useDispatch, useSelector} from 'react-redux';
import {currentImage} from 'redux/actions';
import {useNavigation} from '@react-navigation/native';

const HomeContainer = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [images, setImage] = useState<Hit[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);

  const onNavigateImageDetails = (productDetails: Hit) => {
    dispatch(currentImage(productDetails));
    navigation.navigate('Details');
  };

  const getImageResult = async (searchText: string) => {
    try {
      setLoading(true);
      const imageResults: Images = await getImages(searchText);
      setImage(imageResults?.hits || []);
      setLoading(false);
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    const timerId = setTimeout(() => {
      getImageResult(searchTerm);
    }, 800);

    setTimer(timerId);
  }, [searchTerm]);

  const generatedProps = {
    images,
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateImageDetails,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
