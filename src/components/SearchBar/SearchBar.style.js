import { StyleSheet } from "react-native";

export default StyleSheet.create({
    searchBarContainer: {
        marginBottom: 10,
        backgroundColor: "#ffffff",
        borderColor: 'transparent',
    },
    searchBar: {
        width: '100%',
        backgroundColor: "#ffffff",
        // borderWidth: 2, //didn't work
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#ADD8E6',
        paddingHorizontal: 10,
    },
    text: {
        color: '#000000'
    },
})