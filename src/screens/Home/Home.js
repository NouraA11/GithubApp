import React, { memo, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList } from 'react-native';
import {styles} from './Home.style';
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from '../../components/Card/Card';
import useRepos from "../../hooks/useRepos";
import useSearch from '../../hooks/useSearch';

const Home = () => {
    const [query, setQuery] = useState('');

    const onSuccess = (data) => {
        console.log('Successfully fetched')
    }
    const onError = (error) => {
        console.log('Error encountered ', error.message)
    }

    const { data: initialData, isLoading: isLoadingInitial, isError: isErrorInitial, error: errorInitial, isFetching: isFetchingInitial, } = useRepos(query, onSuccess, onError)
    const { data: searchData, isLoading: isLoadingSearch, isError: isErrorSearch, error: errorSearch, isFetching: isFetchingSearch,
        refetch, isRefetching, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useSearch(query, onSuccess, onError);

    const handleSearch = (value) => {
        setQuery(value)
        refetch()
    }

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }

    const renderItem = ({ item }) => <Card repo={item} />

    const initialDataItems = initialData?.data;
    const searchDataItems = searchData?.pages?.map(page => page.data.items).flat();

    const RepoList = memo(() => {
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}-${item.id}`}
                data={!query ? initialDataItems : searchDataItems}
                renderItem={renderItem}
                initialNumToRender={20}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
            />
        )
    })
    const NoData = () => (
        <Text style={styles.text}>No repositories were found</Text>
    )

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SearchBar onChangeText={handleSearch} />
            {!query ?
                <RepoList />
                : isLoadingInitial || isLoadingSearch ?
                    <ActivityIndicator />
                    : isErrorInitial || isErrorSearch ?
                        <Text style={styles.text}>Something went wrong, please try again</Text>
                        : status === "success" && searchData?.pages && searchData?.pages[0]?.data.total_count === 0 ?
                            <NoData />
                            : <RepoList />
            }
            {
                isFetchingNextPage && <ActivityIndicator />
            }
        </SafeAreaView >
    );
}

export default Home;
