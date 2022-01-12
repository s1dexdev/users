import Axios from 'axios';
import apiConfig from './apiConfig';

const { baseUrl, params } = apiConfig;

Axios.defaults.baseURL = baseUrl;
Axios.defaults.params = { ...params };

const fetchUsers = async (page = params.page, quantity = params.reuslts) => {
    Axios.defaults.params.page = page;
    Axios.defaults.params.results = quantity;

    const response = await Axios.get(`/`);
    const { results } = response.data;

    return results;
};

export default fetchUsers;
