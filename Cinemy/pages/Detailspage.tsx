import React, { useEffect, useState } from 'react'
import {Text, ScrollView, Image, ActivityIndicator, View} from 'react-native';
import { getMovieDetails } from '../services/services';
import {styles} from '../css/Detailspage';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';

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
                        {/* <Text>{movieDetails.vote_average}</Text> */}
                        <StarRating
                            disabled={true} // Setting the interactivity of the star buttons
                            maxStars={5}
                            rating={movieDetails.vote_average / 2} // Dividing by two to make the rating count in range of 5
                            fullStarColor = {'gold'}
                            starSize = {30}
                        />
                        <Text style = {styles.movieOverview}>
                            {movieDetails.overview}
                        </Text>
                        <Text style = {styles.movieRelease}>
                            {'Release Date: ' + dateFormat(movieDetails.release_date, 'mmmm dS, yyyy')}
                        </Text>
                    </View>
                </ScrollView>
            )}
            {!loaded && <ActivityIndicator size={'large'}/>}
        </React.Fragment>
    );
}

export default Detailspage;