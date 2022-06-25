import React, {useEffect} from 'react';
import HomeScreen from './Home.view';

import {getImages} from '../api_requests/getImages';
import {Images} from '../types/Images';
const HomeContainer = (props: any) => {
  const getImageResult = async () => {
    try {
      const imageResults: Images = await getImages('yellow flower');
      console.log(imageResults.hits);
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    getImageResult();
  }, []);

  return <HomeScreen />;
};
export default HomeContainer;
