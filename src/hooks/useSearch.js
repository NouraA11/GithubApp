import React from "react";
import { useInfiniteQuery } from "react-query";
import { queryKeysList } from "../utils/constants";
import { SEARCH_DATA_PER_PAGE } from "../utils/config";
import instance from "../utils/instance";

const fetchRepos = ({ pageParam = 1, queryKey }) => {
    const [, query] = queryKey;
    return instance.get(`/search/repositories?q=${query}&per_page=${SEARCH_DATA_PER_PAGE}&page=${pageParam}`)
}
const {SEARCH_REPOS_KEY} = queryKeysList;

const useSearch = (query, onSuccess, onError) => {

    return (
        useInfiniteQuery({
            queryKey: [SEARCH_REPOS_KEY, query],
            queryFn: fetchRepos,
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length === 0) {
                    return undefined
                }
                return allPages.length + 1
            },
            enabled: !!query,
            onSuccess,
            onError
        })
    );
}

export default useSearch;
