import React from "react";
import { StyleSheet, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import Card from '../components/Card';

const Home = () => {

    return (
        <View style={styles.MainContainer}>
            <SearchBar />
            <Card />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    MainContainer: {
        height: '100%',
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})