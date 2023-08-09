import React, { useState } from "react";
import { SearchBar as DefaultSearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar = ({ onChangeText }) => {
    const [searchValue, setSearchValue] = useDebounce();

    const handleSearch = (value) => {
        if (value.replace(/[^\w_@./#&+-]*$/, "") !== "") {
            setSearchValue(value)
            onChangeText(value)
        }
    }

    return (
        <DefaultSearchBar
            containerStyle={styles.SearchBarContainer}
            inputContainerStyle={styles.SearchBar}
            inputStyle={styles.Text}
            round
            placeholder="Search for a repository ..."
            placeholderTextColor="grey"
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
        backgroundColor: 'white',
        // borderWidth: 2, //didn't work
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: 'lightblue',
        paddingHorizontal: 10,
    },
    Text: {
        color: 'black'
    },
})