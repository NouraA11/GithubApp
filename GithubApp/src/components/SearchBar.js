import React, { useState } from "react";
import { SearchBar as DefaultSearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";

const SearchBar = ({ onChangeText }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value)
        onChangeText(value)
    }

    return (
        <DefaultSearchBar
            containerStyle={styles.SearchBarContainer}
            inputContainerStyle={styles.SearchBar}
            round
            placeholder="Search here ..."
            placeholderTextColor="black"
            value={searchValue}
            onChangeText={handleSearch}
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