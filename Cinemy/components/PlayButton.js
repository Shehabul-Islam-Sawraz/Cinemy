import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../css/Detailspage';
import Colors from '../Themes/Colors';

class PlayButton extends React.PureComponent {
    render() {
        const {handlePress} = this.props;
        return (
            <Pressable 
                style = {styles.pressableButton}
                // Here `videoShown`named function is passed as handlePress from Detailspage
                onPress = {() => handlePress()}> 
                    <Icon 
                        name = {'caret-forward-outline'}
                        size = {30}
                        color = {Colors.white}/>
            </Pressable>
        );
    }
}

export default PlayButton;