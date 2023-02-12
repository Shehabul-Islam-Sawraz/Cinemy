import React from 'react'
import {TouchableOpacity, Image} from 'react-native';
import {styles} from '../css/Homepage'

const imageBasePath = 'https://image.tmdb.org/t/p/w500';

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
                        source = {{uri: imageBasePath+item.poster_path}}/>
            </TouchableOpacity>
        );
    }
}

export default List;