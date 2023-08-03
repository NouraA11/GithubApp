import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import FavoriteButton from "./FavoriteButton";

const Card = () => {
    return (
        <View style={styles.Card}>
            <Text style={styles.Title}>Title</Text>
            <Text style={styles.Body}>Body</Text>
            <FavoriteButton />
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    Card: {
        width: '95%',
        padding: 10,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: 'lightgrey'//"#fff",

    },
    Title: {
        fontWeight: 'bold',
        // color: ''
        fontSize: 18,
    },

    Body: {
        fontSize: 14,
    }
})