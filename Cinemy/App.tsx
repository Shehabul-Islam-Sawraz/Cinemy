import React from 'react';
import Homepage from './pages/Homepage';
import Detailspage from './pages/Detailspage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Stack contains all the pages that will nagivate with each other
const Stack = createNativeStackNavigator();

const Cinemy = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Detailspage" component={Detailspage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Cinemy;
