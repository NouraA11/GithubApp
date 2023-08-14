import React, { useState } from "react";
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import styles from './Home.style';
import SearchBar from "../../components/SearchBar/SearchBar";
import RepoList from "../../components/RepoList/RepoList";
import useRepos from "../../hooks/useRepos";
import useSearch from '../../hooks/useSearch';
import { useDebounce } from '../../hooks/useDebounce';

const Home = () => {
    const [query, setQuery] = useState('');

    const onSuccess = (data) => {
        console.log('Successfully fetched')
    }
    const onError = (error) => {
        console.log('Error encountered ', error.message)
    }

    const { data: initialData, isLoading: isLoadingInitial, isError: isErrorInitial } = useRepos(query, onSuccess, onError)
    const { data: searchData, isLoading: isLoadingSearch, isError: isErrorSearch, 
        refetch, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useSearch(query, onSuccess, onError);

        const isSearchSuccess = status === "success";
        const isNoSearchData = searchData?.pages && searchData?.pages[0]?.data.total_count === 0;

    const handleSearch = (value) => {
        useDebounce(setQuery(encodeURIComponent(value)))
    }

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }

    const initialDataItems = initialData?.data;
    const searchDataItems = searchData?.pages?.map(page => page.data.items).flat();

    const RepoListProps = {
        query,
        initialDataItems, 
        searchDataItems,
        isFetchingNextPage, 
        handleLoadMore}
        
    const renderRepoList = () => <RepoList {...RepoListProps}/>

    const renderComponents = () => {

        if (!query){
            return renderRepoList()
        }

        if (isLoadingInitial || isLoadingSearch) {
           return <ActivityIndicator />
        }

        if (isErrorInitial || isErrorSearch) {
            return <Text style={styles.text}>Something went wrong, please try again</Text>
        }

        if (isSearchSuccess && isNoSearchData) {
            return <Text style={styles.text}>No repositories were found</Text>
        }

        return renderRepoList()
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SearchBar onChangeText={handleSearch} />
            {renderComponents()}
        </SafeAreaView >
    );
}

export default Home;
