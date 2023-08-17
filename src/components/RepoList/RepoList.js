import React from "react";
import {FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/Card/Card';

const renderItem = ({ item }) => <Card repo={item} />
const keyExtractor = (item, index) => `${index}-${item.id}`

const RepoList = ({ query, initialDataItems, searchDataItems, isFetchingNextPage, handleLoadMore }) => {

    return (
        <FlatList
            keyExtractor={keyExtractor}
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

export default RepoList;