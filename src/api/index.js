import FetchJson from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    fetchPhotoById: (id) => FetchJson.get(`/photos/${id}`),
    searchPhoto: (data) => FetchJson.get('/search/photos',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
    searchTopics: (id,data) => FetchJson.get(`/topics/${id}/photos/`,data),

    fetchUserPhoto: (id,data) => FetchJson.get(`/users/${id}/photos/`,data),
    getUserProfile: (id,data) => FetchJson.get(`/users/${id}/`,data),

    getRelatedCollection: (id,data) => FetchJson.get(`/collections/${id}/related/`,data),
}

export default Api;