import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import Card from '../components/Card';
import useRepos from "../hooks/useRepos";
import useSearch from "../hooks/useSearch";

const Home = () => {
    const [query, setQuery] = useState('');

    const onSuccess = (data) => {
        console.log('Successfully fetched')
    }
    const onError = (error) => {
        console.log('Error encountered', error.message)
    }

    const handleSearch = (value) => {
        setQuery(value)
        refetch()
    }

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }

    const { data, isLoading, isError, error, isFetching, refetch, isRefetching, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearch(query);

    return (
        <View style={styles.MainContainer}>
            <SearchBar onChangeText={handleSearch} />
            <ScrollView onScrollEndDrag={handleLoadMore}>
                {isLoading || isFetching ?
                    <ActivityIndicator />
                    : isError ?
                        <Text>{error.message}</Text>
                        : data?.pages.map((page) =>
                            page.data.items.map((repo) => {
                                return (
                                    <View key={repo.id}>
                                        <Card repo={repo} />
                                    </View>
                                )
                            })


                        )
                }
            </ScrollView>
            {
                isFetchingNextPage ? <ActivityIndicator /> : null
            }
        </View >
    );
}

export default Home;

const styles = StyleSheet.create({
    MainContainer: {
        height: '100%',
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center'
    },
})