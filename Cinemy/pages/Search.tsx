import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../css/Searchpage';
import Icon from 'react-native-vector-icons/Ionicons'
import { getSearchedMovieTV } from '../services/services';
import Card from '../components/Card';
import Error from '../components/Error';

const Search = ({navigation}) => {
    const [text, onChangeText] = useState();
    const [searchResults, setSearchResults] = useState();
    const [error, setError] = useState(false);

    // Fetches the search movies/shows using search API service
    const onSubmit = query => {
        getSearchedMovieTV(query, 'movie')
            .then(data => {
                setSearchResults(data.results);
                //console.log(data.results.length);
            })
            .catch(() => {
                setError(true);
            });
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
                <View style = {styles.searchedItems}>
                    {/** Searched items results */}
                    {searchResults && searchResults.length>0 && (
                        <FlatList
                            // There will be 3 columns per row
                            numColumns = {3}
                            data = {searchResults}
                            renderItem = {({item}) => (
                                <Card 
                                    navigation = {navigation} 
                                    item = {item}/>
                            )}
                            keyExtractor = {item => item.id}
                        />
                    )}

                    {/** When searched but no results */}
                    {searchResults && searchResults.length==0 && (
                        <View style = {styles.emptyResults}>
                            <Text style = {styles.font}>
                                {'No Results matching your criteria...'}
                            </Text>
                            <Text style = {styles.font}>
                                {'Try different keywords...'} 
                            </Text>
                        </View>
                    )}
                    {/** When nothing is searched */}
                    {!searchResults && (
                        <View style = {styles.emptySearch}>
                            <Text style = {styles.font}>
                                Type something to start searching...
                            </Text>
                        </View>
                    )}

                    {/** Error */}
                    {error && <Error/>}
                </View>
            </SafeAreaView>
        </React.Fragment>
    );
};

export default Search;