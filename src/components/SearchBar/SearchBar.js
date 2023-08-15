import React, { useState } from "react";
import { SearchBar as DefaultSearchBar } from "react-native-elements";
import styles from "./SearchBar.style";
import useDebounce from '../../hooks/useDebounce';


const SearchBar = ({ onChangeText }) => {
    const [searchValue, setSearchValue] = useState('');
    const {debounce} = useDebounce();
    const debouncedFunction = debounce(onChangeText, 1000);

    const handleSearch = (value) => {
        if (value.replace(/[^\w_@./#&+-]*$/, "") !== "") {
            setSearchValue(value)

            // debounce(onChangeText, 2000)(value)
            debouncedFunction(value);
        }
    }
            
    const handleClear = () => {
        onChangeText('')
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
            onClear={handleClear}
        />
    );
}

export default SearchBar;
