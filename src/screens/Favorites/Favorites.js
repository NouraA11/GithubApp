import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styles from './Favorites.style';
import Card from "../../components/Card/Card";

const Favorites = () => {
    const favoriteList = useSelector((state) => state.Favorite);
    
    const FavoriteListComponent = () => (
        favoriteList?.map((repo) => {
        return (
            <View key={repo.id}>
                <Card repo={repo} />
            </View>
        )
    }))

    const NoFavorites = () => (
    <Text style={styles.text}>You have no favorite repositories</Text>
    )

    return (
        <ScrollView style={styles.mainContainer}>
            {favoriteList && favoriteList.length != 0 ?
                <FavoriteListComponent />
                : <NoFavorites />
            }
        </ScrollView>
    );
}

export default Favorites;
