import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchBarContainer: {
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: 'transparent',
    },
    searchBar: {
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
    text: {
        color: 'black'
    },
})