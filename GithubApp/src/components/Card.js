import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import FavoriteButton from "./FavoriteButton";
import { Card as DefaultCard } from 'react-native-elements';

const Card = () => {
    return (
        <DefaultCard
            containerStyle={styles.Card}>
            <DefaultCard.Image
                style={styles.CardImage}
                source={{
                    uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
            />
            <View style={styles.FavoriteButton} >
                <FavoriteButton />
            </View>
            <DefaultCard.Title style={styles.Title}>
                CARD WITH DIVIDER
            </DefaultCard.Title>
            <Text style={styles.Body}>
                When searching for repositories, you can get text match metadata for the name and description fields when you pass the text-match media type.
            </Text>
        </DefaultCard>
    );
}

export default Card;

const styles = StyleSheet.create({
    Card: {
        width: '95%',
        paddingTop: 0,
        paddingHorizontal: 0,
        marginTop: 0,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    CardImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    FavoriteButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        // backgroundColor: 'white',
        // opacity: 0.3,
        // borderBottomLeftRadius: 20, //--
    },
    Title: {
        marginTop: 5,
        fontWeight: 'bold',
        // color: ''
        fontSize: 18,
    },
    Body: {
        fontSize: 14,
        margin: 5,
    },

})