import axios from 'axios';

export default() => {

    // set server location
    return axios.create({
        baseURL: 'https://api.meteostat.net/v2/',
        withCredentials: false
    });
};
