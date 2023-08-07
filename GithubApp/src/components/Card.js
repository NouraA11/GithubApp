import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import FavoriteButton from "./FavoriteButton";
import { Card as DefaultCard } from 'react-native-elements';
import moment from "moment/moment";

const Card = ({ repo }) => {
    return (
        <DefaultCard
            containerStyle={styles.Card}>
            <View style={styles.FavoriteButton} >
                <FavoriteButton />
            </View>
            <DefaultCard.Title style={styles.Title}>
                {repo.name}
            </DefaultCard.Title>
            <View style={styles.ColumnContainer}>
                <Text style={styles.Text}>{repo.forks_count} forks |</Text>
                <Text style={styles.Text}>updated at: {moment(repo.updated_at).format('DD/MM/YYYY')}</Text>
            </View>
            <View style={styles.UserDetailsContainer}>
                <DefaultCard.Image
                    style={styles.ProfileImage}
                    source={{
                        uri:
                            repo.owner.avatar_url || 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <View >
                    <Text style={{ color: 'black' }}>{repo.owner.login}</Text>
                    <Text style={styles.Text}>{repo.owner.type}</Text>
                </View>
            </View>
            <Text style={styles.Body}>
                {repo.description || 'No description available'}
            </Text>
        </DefaultCard>
    );
}

export default Card;

const styles = StyleSheet.create({
    Card: {
        // width: '95%',
        paddingTop: 10,
        paddingHorizontal: 10,
        marginTop: 0,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    ProfileImage: {
        margin: 5,
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    UserDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    FavoriteButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 8,
        backgroundColor: 'lightgrey',
        borderRadius: 50,
    },
    ColumnContainer: {
        flexDirection: 'row',
    },
    Title: {
        fontWeight: 'bold',
        color: 'darkblue',
        fontSize: 18,
        textAlign: 'left',
        marginTop: 5,
    },
    Body: {
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
    },
    Text: {
        color: 'grey',
        marginEnd: 5,
    }

})