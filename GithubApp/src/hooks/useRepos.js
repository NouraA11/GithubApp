import axios from "axios";
import React from "react";
import { useQuery } from "react-query";


const fetchRepos = () => {
    return axios.get('https://api.github.com/repositories?per_page=20&page=1')
}

const useRepos = (onSuccess, onError) => {
    return (
        useQuery(
            'initialRepositories',
            fetchRepos,
            {
                onSuccess,
                onError
            }
        )
    );
}

export default useRepos;