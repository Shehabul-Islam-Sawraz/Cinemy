import {StyleSheet} from 'react-native';
import Colors from '../Themes/Colors';

export const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderDotsHeight: { 
        height: 0, // Hiding the dots of the slider
    },
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listComponent: {
        marginTop: 25,
    },
    componentTextHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 15,
    },
    cardContainer: {
        padding: 5,
        marginBottom: 10,
        position: 'relative',
        alignItems: 'center',
        height: 200,
        //justifyContent: 'center',
    },
    cardImage: {
        height: 200,
        width: 120,
        borderRadius: 15,
    },
    movieName: {
        position: 'absolute',
        width: 100,
        textAlign: 'center',
        top: 15,
    },
    errorTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Colors.danger,
    },
    logo: {
        width: 65,
        height: 65,
        marginTop: 5,
        marginLeft: 15,
    },
    homeNavbar: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    }
});