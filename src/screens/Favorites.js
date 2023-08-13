import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card/Card";
import { useSelector } from "react-redux";

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

const styles = StyleSheet.create({
    MainContainer: {
        paddingTop: 10,
        backgroundColor: 'white'
    },
    Text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    }
})