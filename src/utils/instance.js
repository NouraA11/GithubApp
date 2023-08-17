import axios from "axios";
import Config from "react-native-config";

export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': Config.GITHUB_ACCESS_TOKEN,
    },
})