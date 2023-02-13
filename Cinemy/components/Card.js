import React from 'react'
import {TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../css/Homepage'

const imageBasePath = 'https://image.tmdb.org/t/p/w500';
const placeholderImage = require('../assets/images/placeholder.png');

class List extends React.PureComponent {
    render() {
        const {item} = this.props; 
        return (
            // `TouchableOpacity` helps to give a clicky effect to a card component
            <TouchableOpacity
                style = {styles.cardContainer}>
                    <Image
                        resizeMode= "cover"
                        style = {styles.cardImage} 
                        source = {
                            item.poster_path
                              ? {uri: imageBasePath+item.poster_path}
                              : placeholderImage
                    }/>
                    {!item.poster_path && <Text style = {styles.movieName}>{item.title}</Text>}
            </TouchableOpacity>
        );
    }
}

export default List;