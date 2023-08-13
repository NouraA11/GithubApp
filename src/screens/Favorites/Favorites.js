import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import {styles} from './Favorites.style';
import Card from "../../components/Card/Card";

const Favorites = () => {
    const favoriteList = useSelector((state) => state.Favorite);

    return (
        <ScrollView style={styles.MainContainer}>
            {favoriteList && favoriteList.length != 0 ?
                favoriteList?.map((repo) => {
                    return (
                        <View key={repo.id}>
                            <Card repo={repo} />
                        </View>
                    )
                })
                : <Text style={styles.Text}>You have no favorite repositories</Text>
            }
        </ScrollView>
    );
}

export default Favorites;
