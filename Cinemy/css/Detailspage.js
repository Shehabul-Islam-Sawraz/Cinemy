import {StyleSheet, Dimensions} from 'react-native';

const dimensionScreen = Dimensions.get('screen');

export const styles = StyleSheet.create({
    movieImage: {
        height: dimensionScreen.height / 2,
    },
});