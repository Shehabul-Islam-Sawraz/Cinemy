import React from 'react'
import {TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../css/Homepage'
import PropTypes from 'prop-types';

const imageBasePath = 'https://image.tmdb.org/t/p/w500';
const placeholderImage = require('../assets/images/placeholder.png');

// Defining arguments/properties types
// Here, the property `item` would be an object
const propTypes = {
    item: PropTypes.object,
};

class Card extends React.PureComponent {
    render() {
        const {navigation, item} = this.props; 
        return (
            // `TouchableOpacity` helps to give a clicky effect to a card component
            <TouchableOpacity
                onPress={() => navigation.navigate('Detailspage', {
                    movieId: item.id,
                })}
                style = {styles.cardContainer}>
                    <Image
                        resizeMode= "cover"
                        style = {styles.cardImage} 
                        source = {
                            item.poster_path
                              ? {
                                    uri: imageBasePath+item.poster_path
                                }
                              : placeholderImage
                    }/>
                    {!item.poster_path && <Text style = {styles.movieName}>{item.title}</Text>}
            </TouchableOpacity>
        );
    }
}

Card.propTypes = propTypes; // Setting the properties of card components
export default Card;