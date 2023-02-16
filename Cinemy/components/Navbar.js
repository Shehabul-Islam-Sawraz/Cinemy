import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Navbar extends React.PureComponent {
    render() {
        const {navigation} = this.props;
        return (
            // SafeAreaView makes the render of the view under the notch of a mobile device
            <SafeAreaView>
                <View>
                    <TouchableOpacity
                        onPress={() => {navigation.goBack()}}>
                            <Icon
                                name = {'chevron-back'}
                                size = {40}
                                color = {'#fff'}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Navbar;