import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';

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
                    ? (<View></View>)
                    : (<View>
                        <TouchableOpacity
                            onPress={() => {navigation.goBack()}}>
                                <Icon
                                    name = {'chevron-back'}
                                    size = {40}
                                    color = {'#fff'}/>
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