const apiConfig = {
    baseUrl: 'https://randomuser.me/api',
    defaultFetch: {
        page: 1,
        results: 20,
    },
    params: {
        seed: 'abc',
        exc: 'email,id,nat,cell',
    },
};

export default apiConfig;
