import React, {memo} from "react";
import {FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/Card/Card';

const renderItem = ({ item }) => <Card repo={item} />

const RepoList = ({RepoListProps}) => {
    const {query,
        initialDataItems, 
        searchDataItems,
        handleLoadMore,
        isFetchingNextPage} = RepoListProps;

    return (
        <FlatList
            keyExtractor={(item, index) => `${index}-${item.id}`}
            data={!query ? initialDataItems : searchDataItems}
            renderItem={renderItem}
            initialNumToRender={20}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                isFetchingNextPage && <ActivityIndicator />
        }
        />
    )
}

export default memo(RepoList);