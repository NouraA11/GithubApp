import React, { memo } from "react";
import { View, Text } from "react-native";
import {styles} from './Card.style'
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Card as DefaultCard } from 'react-native-elements';
import dayjs from 'dayjs';

const Card = ({ repo }) => {
    const {name, forks_count, updated_at, owner, description = 'No description available'} = repo;
    const {avatar_url ='https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg', 
        login, type} = owner;

    return (
        <DefaultCard
            containerStyle={styles.card}>
            <View style={styles.columnContainer} >
                <DefaultCard.Title style={styles.title}>
                    {name}
                </DefaultCard.Title>
                <FavoriteButton repo={repo} />
            </View>

            {forks_count && updated_at &&
                <Text style={styles.text}>
                    {forks_count} forks | updated at: {dayjs(updated_at).format('DD/MM/YYYY')}
                </Text>
            }

            <View style={styles.userDetailsContainer}>
                <DefaultCard.Image
                    style={styles.profileImage}
                    source={{
                        uri:
                            avatar_url
                    }}
                />

                <View >
                    <Text style={styles.userName}>{login}</Text>
                    <Text style={styles.text}>{type}</Text>
                </View>

            </View>
            
            <Text style={styles.body}>
                {description}
            </Text>
            
        </DefaultCard>
    );
}

export default memo(Card);