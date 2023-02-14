import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../css/Detailspage';

class PlayButton extends React.PureComponent {
    render() {
        return (
            <Pressable style = {styles.pressableButton}>
                <Icon 
                    name = {'caret-forward-outline'}
                    size = {30}
                    color = {'white'}/>
            </Pressable>
        );
    }
}

export default PlayButton;