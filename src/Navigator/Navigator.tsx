import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../Home/Home.container';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const ImageSearchStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ImageSearchStack;
