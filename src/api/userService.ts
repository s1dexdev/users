import Axios from 'axios';
import apiConfig from './apiConfig';
import { User } from '../interfaces';

interface IParams {
    page: number;
    results: number;
}

Axios.defaults.baseURL = apiConfig.baseUrl;

const fetchUsers = async (options?: IParams): Promise<User[]> => {
    options = options || apiConfig.defaultFetch;

    const requestConfig = {
        params: {
            page: options.page,
            results: options.results,
            seed: apiConfig.params.seed,
            exc: apiConfig.params.exc,
        },
    };

    const {
        data: { results },
    } = await Axios.get('/', requestConfig);

    return results;
};

export default fetchUsers;
