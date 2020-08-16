import axios from 'axios';
import api from '@/services/api';

const ApiService = {

    setHeader() {
        axios.defaults.headers.common['x-api-key'] = 'H9qfscc9tUDVAORtSjavlFDFTIrrw8jo';
    },

    get(resource, slug ="") {
        return api().get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        })
    }

};

export default ApiService
