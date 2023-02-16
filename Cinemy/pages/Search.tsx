import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../css/Searchpage';
import Icon from 'react-native-vector-icons/Ionicons'

const Search = ({navigation}) => {
    const [text, onChangeText] = useState();

    const onSubmit = (query) => {
        console.log(query);
    };

    return (
        <React.Fragment>
            <SafeAreaView>
                <View style = {styles.searchContainer}>
                    <View style = {styles.searchForm}>
                        <TextInput
                            style = {styles.searchInput}
                            placeholder = {'Search Movie, TV Show...'}
                            onChangeText = {onChangeText}
                            value = {text}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {onSubmit(text)}}>
                            <Icon
                                name = {'search-outline'}
                                size = {30}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </React.Fragment>
    );
};

export default Search;