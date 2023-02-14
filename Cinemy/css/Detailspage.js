import {StyleSheet, Dimensions} from 'react-native';

const dimensionScreen = Dimensions.get('screen');

export const styles = StyleSheet.create({
    movieImage: {
        height: dimensionScreen.height / 2,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    genresContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 10, 
        marginBottom: 20,
    },
    genre: {
        marginRight: 10, 
        fontWeight: 'bold',
        fontSize: 15,
    },
    movieOverview: {
        padding: 15, 
    },
    movieRelease: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 15, 
    }
});