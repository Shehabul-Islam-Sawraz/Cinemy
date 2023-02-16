import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../Themes/Colors';

const dimensionScreen = Dimensions.get('screen');

export const styles = StyleSheet.create({
    movieImage: {
        height: dimensionScreen.height / 2.2,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
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
    },
    pressableButton: {
        alignContent: 'center',
        borderRadius: 50,
        width: 50,
        padding: 10,
        paddingLeft: 12,
        height: 50,
        backgroundColor: Colors.primary,
    },
    playButton: {
        position: 'absolute',
        top: -27,
        right: 20,
    },
    videoPlayer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});