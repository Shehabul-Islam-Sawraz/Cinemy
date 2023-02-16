import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
    },
    searchContainer: {
        padding: 10,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchForm: {
        // flexBasis & flexGrow helps to align the items according to the spaces they need
        flexBasis: 'auto',
        flexGrow: 1,
        paddingRight: 8,
    }
});