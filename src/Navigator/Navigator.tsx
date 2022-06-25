import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from 'screens/Home/Home.container';
import {NavigationContainer} from '@react-navigation/native';
import ImageDetailsContainer from 'screens/ImageDetails/ImageDetails.container';

const Stack = createStackNavigator();

const ImageSearchStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Details" component={ImageDetailsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ImageSearchStack;
