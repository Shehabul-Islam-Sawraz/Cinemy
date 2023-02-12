import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';
import Homepage from './pages/Homepage';

const Cinemy = () => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          
        <Homepage></Homepage> 

    </View>
  );
};
export default Cinemy;
