import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchRepos = ({ pageParam = 1, queryKey }) => {
    const [, query] = queryKey;
    return axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${pageParam}`//, {
        //     headers: {
        //         Authorization: `token ${accessToken}`,
        //     }
        // }
    )
}

const useSearch = (query) => {
    return (
        useInfiniteQuery(
            ['searchRepositories', query],
            fetchRepos,
            {
                getNextPageParam: (pages) => {
                    if (!pages || !pages[pages.length - 1]) {
                        return undefined;
                    } else {
                        return pages.length + 1
                    }
                },
                enabled: query !== ''
            }
        )
    );
}

export default useSearch;
