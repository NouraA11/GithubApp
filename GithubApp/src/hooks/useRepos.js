import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

//returns popular repositories to display as initial data
const fetchRepos = () => {
    return axios.get('https://api.github.com/repositories?per_page=70&sort=stars')
}

const useRepos = (query, onSuccess, onError) => {
    return (
        useQuery(
            'initialRepositories',
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