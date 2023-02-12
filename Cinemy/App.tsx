import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';

const Cinemy = () => {
  const [movie, setMovie] = useState(''); // Here we are using state variable so that the variable can be updated even after the template is rendered
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
  }, []); // Here we are using empty array as we want to update the variable `movie` only once

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie Name: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      {errorMsg && <Text style={{color: 'red'}}> Error in the server!!</Text>}
    </View>
  );
};
export default Cinemy;
