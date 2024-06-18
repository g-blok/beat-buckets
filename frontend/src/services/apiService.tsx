import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get<{ data: string }>('/api/data');
    return response;
};

export default {
    fetchData,
};
