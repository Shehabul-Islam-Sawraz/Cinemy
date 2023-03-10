import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Dimensions, ScrollView} from 'react-native';
import {getDocumentaryMovies, getFamilyMovies, getPopularMovies, getPopularTVShows, getUpcomingMovies} from '../services/services';
import {styles} from '../css/Homepage'
import {SliderBox} from "react-native-image-slider-box"; // Used for image slide show
import List from '../components/List'; // Contains the components that will be repeatedly used
import Error from '../components/Error';

const slideshowImagePath = 'https://image.tmdb.org/t/p/w500';
const dimensionScreen = Dimensions.get('screen'); // This returns the height & width of the device screen

const Homepage = ({navigation}) => {
    const [popularMovies, setPopularMovies] = useState(); // Here we are using state variable so that the variable can be updated even after the template is rendered
    const [familyMovies, setFamilyMovies] = useState();
    const [documentaryMovies, setDocumentaryMovies] = useState();
    const [popularTVShows, setPopularTVShows] = useState();
    const [moviesImages, setMoviesImages] = useState();
    const [errorMsg, setErrorMsg] = useState(false); // Stores error message(if any error occurs)
    const [pageLoaded, setPageLoaded] = useState(false); // USed for loading page

    // This will return promise to all the service functions.
    // So, we don't need multiple `then` & `error` function.
    // We can use only one `then` & `error` check.
    const getMovies = () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getPopularTVShows(),
            getFamilyMovies(),
            getDocumentaryMovies(),
        ]);
    };

    // useEffect helps us to update a dome variable after any specified time or updating it once
    // Without useEffect, the variable asks for data unlimited times from the server, which cause more CPU usage
    useEffect(() => {
        // Here we use `then`, because async method return us a Promise that
        // when it gets data, it must return them
        getMovies().then(
            ([
                upcomingMoviesData,
                popularMoviesData,
                popularTVShowsData,
                familyMoviesData,
                documentaryMoviesData,
            ]) => {
                // Get Upcoming movies images for image slider show
                const moviesImagesArray = [];
                upcomingMoviesData.forEach(movie => {
                    moviesImagesArray.push(slideshowImagePath+movie.poster_path);
                });
                setMoviesImages(moviesImagesArray);

                setPopularMovies(popularMoviesData);
                setPopularTVShows(popularTVShowsData);
                setFamilyMovies(familyMoviesData);
                setDocumentaryMovies(documentaryMoviesData);
                setPageLoaded(true);
            }
        )
        .catch(() => {
            setErrorMsg(true);
        })
        .finally(() => {
            setPageLoaded(true);
        });

    }, []); // Here we are using empty array as we want to update the variable `movie` only once

    return (
        // Fragment is used when we want multiple view under a single return
        <React.Fragment>
            {/** If movies are loaded, then show movies */}
            {pageLoaded && !errorMsg && (
                <ScrollView>
                    {/** Slideshow upcoming movies */}
                    {moviesImages && (
                        <View
                            style={styles.sliderContainer}>
                            <SliderBox 
                                images = {moviesImages} 
                                dotStyle = {styles.sliderDotsHeight}
                                sliderBoxHeight = {dimensionScreen.height / 1.5}
                                autoplay = {true} 
                                circleLoop = {true} />
                        </View>
                    )}

                    {/** Popular Movies */}
                    {popularMovies && (
                        <View 
                            style = {styles.carousel}>
                            <List //Passing arguments to `List` component
                                navigation = {navigation}
                                title = "Populer Movies"
                                content = {popularMovies}/> 
                        </View>
                    )}

                    {/** Popular TV Shows */}
                    {popularTVShows && (
                        <View 
                            style = {styles.carousel}>
                            <List //Passing arguments to `List` component
                                navigation = {navigation}
                                title = "Populer TV Shows"
                                content = {popularTVShows}/> 
                        </View>
                    )}

                    {/** Family Movies */}
                    {familyMovies && (
                        <View 
                            style = {styles.carousel}>
                            <List //Passing arguments to `List` component
                                navigation = {navigation}
                                title = "Family Movies"
                                content = {familyMovies}/> 
                        </View>
                    )}

                    {/** Documentary Movies */}
                    {documentaryMovies && (
                        <View 
                            style = {styles.carousel}>
                            <List //Passing arguments to `List` component
                                navigation = {navigation}
                                title = "Documentary Movies"
                                content = {documentaryMovies}/> 
                        </View>
                    )}
                    
                </ScrollView>
            )}

            {/** If movies are not loaded, then show loading sign */}
            {!pageLoaded && <ActivityIndicator size={'large'}/>} 

            {/** Show error(if any occurs) */}
            {errorMsg && <Error/>}
            
        </React.Fragment>
    );
}

export default Homepage;