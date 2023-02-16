import React from 'react';
import Navbar from './Navbar';
import Homepage from '../pages/Homepage';
import Detailspage from '../pages/Detailspage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Stack contains all the pages that will nagivate with each other
const Stack = createNativeStackNavigator();

class StackNavigator extends React.PureComponent {
    render() {
        return (
            // The header(search button & logo) will be available only on main screen
            <Stack.Navigator headerMode = {'screen'}>
                <Stack.Screen 
                name = "Homepage" 
                component = {Homepage}
                options = {{
                    headerTransparent: true,
                    header: ({navigation}) => (
                        <Navbar navigation={navigation} isHomepage = {true}/>
                    ),
                }}/>
                <Stack.Screen 
                name = "Detailspage" 
                component = {Detailspage}
                options = {{
                    headerTransparent: true,
                    header: ({navigation}) => (
                        <Navbar navigation={navigation} isHomepage = {false}/>
                    ),
                }}/>
            </Stack.Navigator>
        );
    }
}

export default StackNavigator;