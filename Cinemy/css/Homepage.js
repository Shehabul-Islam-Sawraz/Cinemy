import {StyleSheet} from 'react-native';

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
    componentTextHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    cardContainer: {
        padding: 5,
        position: 'relative',
    },
    cardImage: {
        height: 200,
        width: 120,
        borderRadius: 15,
    }
});