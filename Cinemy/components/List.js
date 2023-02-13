import React from 'react'
import {Text, View, Dimensions, FlatList} from 'react-native';
import {styles} from '../css/Homepage'
import Card from './Card'

class List extends React.PureComponent {
    render() {
        const {title, content} = this.props; // The arguments passed from the caller. Here `title & content` are the properties for this component
        return (
            <View>
                <View>
                    <Text style={styles.componentTextHeader}>{title}</Text>
                    <FlatList
                        data = {content}
                        horizontal = {true} 
                        // Here `content` denotes the populerMovies list & each `item` is a movie
                        renderItem = {({item}) => <Card item={item}/>}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

export default List;