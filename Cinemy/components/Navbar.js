import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';
import { styles } from '../css/Homepage';
import Colors from '../Themes/Colors';

const propTypes = {
    isHomepage: PropTypes.bool,
};

const defaultProps = {
    isHomepage: false,
};

class Navbar extends React.PureComponent {
    render() {
        const {navigation, isHomepage} = this.props;
        return (
            // SafeAreaView makes the render of the view under the notch of a mobile device
            <SafeAreaView>
                {isHomepage 
                    ? (<View style = {styles.homeNavbar}>
                        <Image
                            style = {styles.logo}
                            source = {require('../assets/images/logo.png')}/>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('Search')}}>
                                <Icon
                                    name = {'search-outline'}
                                    size = {30}
                                    color = {Colors.white}/>
                        </TouchableOpacity>
                    </View>
                    )
                    : (<View>
                        <TouchableOpacity
                            onPress={() => {navigation.goBack()}}>
                                <Icon
                                    name = {'chevron-back'}
                                    size = {40}
                                    color = {Colors.lightGray}/>
                        </TouchableOpacity>
                    </View>
                )}
                
            </SafeAreaView>
        );
    }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;