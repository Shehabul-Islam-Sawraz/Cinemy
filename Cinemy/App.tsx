import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';

const Cinemy = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};
export default Cinemy;
