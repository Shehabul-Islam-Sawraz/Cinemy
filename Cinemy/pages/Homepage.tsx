import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import {getDocumentaryMovies, getFamilyMovies, getPopularMovies, getPopularTVShows, getUpcomingMovies} from '../services/services';
import {styles} from '../css/Homepage'
import {SliderBox} from "react-native-image-slider-box"; // Used for image slide show
import List from '../components/List'; // Contains the components that will be repeatedly used

const slideshowImagePath = 'https://image.tmdb.org/t/p/w500';
const dimensionScreen = Dimensions.get('screen'); // This returns the height & width of the device screen

const Homepage = () => {
    const [popularMovies, setPopularMovies] = useState(''); // Here we are using state variable so that the variable can be updated even after the template is rendered
    const [familyMovies, setFamilyMovies] = useState('');
    const [documentaryMovies, setDocumentaryMovies] = useState('');
    const [popularTVShows, setPopularTVShows] = useState('');
    const [moviesImages, setMoviesImages] = useState('');
    const [errorMsg, setErrorMsg] = useState(false); // Stores error message(if any error occurs)

    // useEffect helps us to update a dome variable after any specified time or updating it once
    // Without useEffect, the variable asks for data unlimited times from the server, which cause more CPU usage
    useEffect(() => {
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

        getPopularTVShows()
        .then(movies => {
            //console.log(movies[0]);
            setPopularTVShows(movies); // Initializing with the list of movies
        })
        .catch(error => {
            setErrorMsg(error);
        });

        getFamilyMovies()
        .then(movies => {
            //console.log(movies[0]);
            setFamilyMovies(movies); // Initializing with the list of movies
        })
        .catch(error => {
            setErrorMsg(error);
        });

        getDocumentaryMovies()
        .then(movies => {
            //console.log(movies[0]);
            setDocumentaryMovies(movies); // Initializing with the list of movies
        })
        .catch(error => {
            setErrorMsg(error);
        });

    }, []); // Here we are using empty array as we want to update the variable `movie` only once

    return (
        // Fragment is used when we want multiple view under a single return
        <React.Fragment>
            <ScrollView>
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
                    <List //Passing arguments to `List` component
                        title = "Populer Movies"
                        content = {popularMovies}/> 
                </View>
                <View 
                    style = {styles.carousel}>
                    <List //Passing arguments to `List` component
                        title = "Populer TV Shows"
                        content = {popularTVShows}/> 
                </View>
                <View 
                    style = {styles.carousel}>
                    <List //Passing arguments to `List` component
                        title = "Family Shows"
                        content = {familyMovies}/> 
                </View>
                <View 
                    style = {styles.carousel}>
                    <List //Passing arguments to `List` component
                        title = "Documentary Shows"
                        content = {documentaryMovies}/> 
                </View>
            </ScrollView>
        </React.Fragment>
    );
}

export default Homepage;