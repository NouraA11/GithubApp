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

    const { data, isLoading, isError, error, isFetching, refetch, isRefetching, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useSearch(query);

    return (
        <View style={styles.MainContainer}>
            <SearchBar onChangeText={handleSearch} />
            {!query ?
                <Text style={styles.Text}>Try searching to find interesting repositories</Text>
                : <ScrollView onScrollEndDrag={handleLoadMore}>
                    {isLoading || isFetching ?
                        <ActivityIndicator />
                        : isError ?
                            <Text>{error.message}</Text>
                            : status === "success" && data?.pages[0]?.data.total_count === 0 ?
                                <Text style={styles.Text}>No repositories were found</Text>
                                : data?.pages.map((page) =>
                                    page.data.items.map((repo) => {
                                        return (
                                            <View key={`${repo.id}-${repo.name}`}>
                                                <Card repo={repo} />
                                            </View>
                                        )
                                    })
                                )
                    }
                </ScrollView>
            }
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
    Text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    }
})