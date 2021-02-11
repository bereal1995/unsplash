import {FetchJson} from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    fetchPhotoById: (id) => FetchJson.get(`/photos/${id}`),
    relatedPhotos: (id) => FetchJson.get(`/photos/${id}/related`),
    getRandomPhoto: () => FetchJson.get(`/photos/random`),

    searchPhoto: (data) => FetchJson.get('/search/photos',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
    getTopicById: (id) => FetchJson.get(`/topics/${id}/`),
    getTopicPhotosById: (id,data) => FetchJson.get(`/topics/${id}/photos/`,data),

    fetchUserPhoto: (id,data) => FetchJson.get(`/users/${id}/photos/`,data),
    getUserProfile: (id) => FetchJson.get(`/users/${id}/`),

    getRelatedCollection: (id,data) => FetchJson.get(`/collections/${id}/related/`,data),

    getMe: () => FetchJson.get(`/me`),
}

export default Api;