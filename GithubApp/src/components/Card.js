import React, { memo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FavoriteButton from "./FavoriteButton";
import { Card as DefaultCard } from 'react-native-elements';
import moment from "moment/moment";

const Card = ({ repo }) => {
    return (
        <DefaultCard
            containerStyle={styles.Card}>
            <View style={styles.ColumnContainer} >
                <DefaultCard.Title style={styles.Title}>
                    {repo.name}
                </DefaultCard.Title>
                <FavoriteButton repo={repo} />
            </View>
            {repo.forks_count && repo.updated_at &&
                <Text style={styles.Text}>
                    {repo.forks_count} forks | updated at: {moment(repo.updated_at).format('DD/MM/YYYY')}
                </Text>}
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

export default memo(Card);

const styles = StyleSheet.create({
    Card: {
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
        borderWidth: 1,
        borderColor: 'lightblue'
    },
    UserDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ColumnContainer: {
        // position: 'absolute', //cause the onPress to act differently
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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