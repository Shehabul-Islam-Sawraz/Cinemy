import React, { useEffect, useState } from 'react'
import {Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import { getMovieDetails } from '../services/services';
import {styles} from '../css/Detailspage'

const imageBasePath = 'https://image.tmdb.org/t/p/w500';
const placeholderImage = require('../assets/images/placeholder.png');

const Detailspage = ({route, navigation}) => {
    const movieId = route.params.movieId;

    const [movieDetails, setMovieDetails] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getMovieDetails(movieId).then(details => {
            setMovieDetails(details);
            setLoaded(true);
        });
    }, [movieId]);
    
    return (
        <React.Fragment>
            {loaded && (
                <ScrollView>
                    <Text>{movieDetails.title}</Text>
                    <Image
                        resizeMode= "cover"
                        style = {styles.movieImage} 
                        source = {
                            movieDetails.poster_path
                              ? {
                                    uri: imageBasePath+movieDetails.poster_path
                                }
                              : placeholderImage
                    }/>
                </ScrollView>
            )}
            {!loaded && <ActivityIndicator size={'large'}/>}
        </React.Fragment>
    );
}

export default Detailspage;