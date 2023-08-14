import React from "react";
import { useQuery } from "react-query";
import { queryKeysList } from "../utils/constants";
import { INITIAL_DATA_PER_PAGE, SORT_BY } from "../utils/config";
import instance from "../utils/instance";

//returns popular repositories to display as initial data
const fetchRepos = () => {
    return instance.get(`/repositories?per_page=${INITIAL_DATA_PER_PAGE}&sort=${SORT_BY}`);
}

const useRepos = (query, onSuccess, onError) => {
    const {INITIAL_REPOS_KEY} = queryKeysList;

    return (
        useQuery(
            INITIAL_REPOS_KEY,
            fetchRepos,
            {
                onSuccess,
                onError,
                enabled: !query
            }
        )
    );
}

export default useRepos;