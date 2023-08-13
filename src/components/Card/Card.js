import React, { memo } from "react";
import { View, Text } from "react-native";
import {styles} from './Card.style'
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Card as DefaultCard } from 'react-native-elements';
import moment from "moment/moment";

const Card = ({ repo }) => {
    return (
        <DefaultCard
            containerStyle={styles.card}>
            <View style={styles.columnContainer} >
                <DefaultCard.Title style={styles.title}>
                    {repo.name}
                </DefaultCard.Title>
                <FavoriteButton repo={repo} />
            </View>
            {repo.forks_count && repo.updated_at &&
                <Text style={styles.text}>
                    {repo.forks_count} forks | updated at: {moment(repo.updated_at).format('DD/MM/YYYY')}
                </Text>}
            <View style={styles.userDetailsContainer}>
                <DefaultCard.Image
                    style={styles.profileImage}
                    source={{
                        uri:
                            repo.owner.avatar_url || 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <View >
                    <Text style={styles.userName}>{repo.owner.login}</Text>
                    <Text style={styles.text}>{repo.owner.type}</Text>
                </View>
            </View>
            <Text style={styles.body}>
                {repo.description || 'No description available'}
            </Text>
        </DefaultCard>
    );
}

export default memo(Card);