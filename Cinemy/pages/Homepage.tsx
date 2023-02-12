import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from "react-native-image-slider-box"; // Used for image slide show

const slideshowImagePath = 'https://image.tmdb.org/t/p/w500';

const Homepage = () => {
    const [movie, setMovie] = useState(''); // Here we are using state variable so that the variable can be updated even after the template is rendered
    const [moviesImages, setMoviesImages] = useState('');
    const [errorMsg, setErrorMsg] = useState(false); // Stores error message(if any error occurs)

    // useEffect helps us to update a dome variable after any specified time or updating it once
    // Without useEffect, the variable asks for data unlimited times from the server, which cause more CPU usage
    useEffect(() => {
        // Here we use `then`, because async method return us a Promise that
        // when it gets data, it must return them
        getPopularMovies()
        .then(movies => {
            //console.log(movies[0]);
            setMovie(movies[0]); // Initializing with the first movie of the movies list
        })
        .catch(error => {
            setErrorMsg(error);
        });

        // Get Upcoming movies images for image slider show
        getUpcomingMovies()
        .then(movies => {
            //console.log(movies[0]);
            const moviesImagesArray = [];
            movies.forEach(movie => {
                moviesImagesArray.push(slideshowImagePath+movie.poster_path);
            });
            setMoviesImages(moviesImagesArray);
        })
        .catch(error => {
            setErrorMsg(error);
        });
    }, []); // Here we are using empty array as we want to update the variable `movie` only once

    return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <SliderBox images={moviesImages} />
        </View>
    );
}

export default Homepage;