import axios from 'axios';

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
}

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com'
});

const request = async (method, url,  data = {}) => {

    try {
        const axiosConfig = {
            url,
            method,
        }

        if (method === FetchConsts.GET) {
            axiosConfig.params = data;
            axiosConfig.params.client_id = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA';

        } else {
            axiosConfig.data = data;
        }

        console.log('@@[Request Config]',axiosConfig);

        return (await axiosInstance(axiosConfig));
    } catch (e) {

    }

}

const FetchJson = {
    get: (url, data) => request(FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.DELETE, url, data),
}

export default FetchJson