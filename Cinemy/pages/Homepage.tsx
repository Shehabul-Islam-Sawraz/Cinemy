import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {styles} from '../css/Homepage'
import {SliderBox} from "react-native-image-slider-box"; // Used for image slide show

const slideshowImagePath = 'https://image.tmdb.org/t/p/w500';
const dimensionScreen = Dimensions.get('screen'); // This returns the height & width of the device screen

const Homepage = () => {
    const [popularMovies, setPopularMovies] = useState(''); // Here we are using state variable so that the variable can be updated even after the template is rendered
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
            setPopularMovies(movies); // Initializing with the list of movies
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
        // Fragment is used when we want multiple view under a single return
        <React.Fragment>
            <View
                style={styles.sliderContainer}>
                <SliderBox 
                    images = {moviesImages} 
                    dotStyle = {styles.sliderDotsHeight}
                    sliderBoxHeight = {dimensionScreen.height / 1.5}
                    autoplay = {true} 
                    circleLoop = {true} />
            </View>
            <View
                style = {styles.carousel}>
                <FlatList
                    data = {popularMovies}
                    horizontal = {true}
                    renderItem = {({item}) => <Text>{item.title}</Text>}>
                </FlatList>
            </View>
        </React.Fragment>
    );
}

export default Homepage;