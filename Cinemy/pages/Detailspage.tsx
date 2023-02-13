import React from 'react'
import {Text, View} from 'react-native';

const Detailspage = ({route, navigation}) => {
    const movie = route.params.movie;
    return (
        <React.Fragment>
            <View>
                <Text>{movie.title}</Text>
            </View>
        </React.Fragment>
    );
}

export default Detailspage;