import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../css/Homepage'
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

// Initializing default arguments for error text
const defaultProps = {
  errorText1: 'Oops! Something went wrong...',
  errorText2: 'Make sure you are online and restart the App',
};

class Error extends React.PureComponent {
  render() {
    const {errorText1, errorText2} = this.props;
    return (
      <View style={styles.errorTextContainer}>
        <Text style={styles.errorText}>{errorText1}</Text>
        <Text style={styles.errorText}>{errorText2}</Text>
      </View>
    );
  }
}

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
export default Error;
