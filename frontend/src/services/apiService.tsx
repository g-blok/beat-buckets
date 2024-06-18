import axios from 'axios';

const fetchData = async () => {
    const response =await axios.get('/api/data', {
        params: {
            client_id: 'client_token',
            limit: '10',
            offset: '0',
            linked_partitioning: '1',
            app_version: '1718276310',
            app_locale: 'en',
        },
        headers: { Authorization: 'oath_token' }
    });
    return response;
};

export default {
    fetchData,
};
