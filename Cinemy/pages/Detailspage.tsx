import React, { useEffect, useState } from 'react'
import {Text, ScrollView, Image, ActivityIndicator, View} from 'react-native';
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
                    <Image
                        resizeMode= "contain"
                        style = {styles.movieImage} 
                        source = {
                            movieDetails.poster_path
                              ? {
                                    uri: imageBasePath+movieDetails.poster_path
                                }
                              : placeholderImage
                    }/>
                    <View style = {styles.detailsContainer}>
                        <Text
                            style = {styles.movieTitle}>
                                {movieDetails.title}
                        </Text>
                        {movieDetails.genres && (
                            <View style = {styles.genresContainer}>
                                {movieDetails.genres.map(genre => {
                                    return (
                                        <Text 
                                            key = {genre.id}
                                            style = {styles.genre}>
                                                {genre.name}
                                        </Text>);
                                })}
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}
            {!loaded && <ActivityIndicator size={'large'}/>}
        </React.Fragment>
    );
}

export default Detailspage;