import React from "react";
import { SearchBar as DefaultSearchBar } from "react-native-elements";
import styles from "./SearchBar.style";
import { useDebounce } from '../../hooks/useDebounce';

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
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBar}
            inputStyle={styles.text}
            round
            placeholder="Search for a repository ..."
            placeholderTextColor="#808080"
            value={searchValue}
            onChangeText={handleSearch}
        />
    );
}

export default SearchBar;
