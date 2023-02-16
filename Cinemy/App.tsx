import React from 'react';
import Homepage from './pages/Homepage';
import Detailspage from './pages/Detailspage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navbar from './components/Navbar';

// Stack contains all the pages that will nagivate with each other
const Stack = createNativeStackNavigator();

const Cinemy = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Homepage" 
          component = {Homepage}
          options = {{
            headerTransparent: true,
          }}/>
        <Stack.Screen 
          name = "Detailspage" 
          component = {Detailspage}
          options = {{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation}/>
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Cinemy;
