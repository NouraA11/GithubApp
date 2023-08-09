import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Config from "react-native-config";

//returns popular repositories to display as initial data
const fetchRepos = () => {
    axios.defaults.headers.common['Authorization'] = Config.GITHUB_ACCESS_TOKEN;
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