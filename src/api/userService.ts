import Axios from 'axios';
import apiConfig from './apiConfig';
import { User } from '../interfaces';

interface IParams {
    page: number;
    results: number;
}

const { baseUrl, params, defaultFetch } = apiConfig;

Axios.defaults.baseURL = baseUrl;
Axios.defaults.params = { ...params };

const fetchUsers = async (options?: IParams): Promise<User[]> => {
    options = options || defaultFetch;

    Axios.defaults.params.page = options.page;
    Axios.defaults.params.results = options.results;

    const {
        data: { results },
    } = await Axios.get('/');

    return results;
};

export default fetchUsers;
