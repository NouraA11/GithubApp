import React from "react";
import axios from "axios";
import Config from "react-native-config";
import { useInfiniteQuery } from "react-query";

const fetchRepos = ({ pageParam = 1, queryKey }) => {
    const [, query] = queryKey;
    axios.defaults.headers.common['Authorization'] = Config.GITHUB_ACCESS_TOKEN;
    return axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${pageParam}`)
}

const useSearch = (query, onSuccess, onError) => {
    return (
        useInfiniteQuery({
            queryKey: ['searchRepositories', query],
            queryFn: fetchRepos,
            getNextPageParam: (lastPage, lastPageParam) => {
                if (lastPage.length === 0) {
                    return undefined
                }
                return lastPageParam + 1
            },
            enabled: query !== '',
            onSuccess,
            onError
        })
    );
}

export default useSearch;