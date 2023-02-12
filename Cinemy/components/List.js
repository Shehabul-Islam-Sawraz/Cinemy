import React from 'react'
import {Text, View, Dimensions, FlatList} from 'react-native';
import {styles} from '../css/Homepage'

class List extends React.PureComponent {
    render() {
        const {title, content} = this.props; // The arguments passed from the caller
        return (
            <View>
                <View>
                    <Text style={styles.componentTextHeader}>{title}</Text>
                    <FlatList
                        data = {content}
                        horizontal = {true}
                        renderItem = {({item}) => <Text>{item.title}</Text>}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

export default List;