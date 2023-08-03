import React, { useState } from "react";
import { SearchBar as DefaultSearchBar } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <DefaultSearchBar
            containerStyle={styles.SearchBarContainer}
            inputContainerStyle={styles.SearchBar}
            round
            placeholder="Search here ..."
            placeholderTextColor="white"
            // searchIcon={}
            value={searchValue}
            onChangeText={setSearchValue}
        />
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    SearchBarContainer: {
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: 'transparent',
    },
    SearchBar: {
        width: '100%',
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10,
    }
})