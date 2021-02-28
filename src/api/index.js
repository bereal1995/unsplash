import {FetchJson} from "../lib/Fetch";


const Api = {
    relatedPhotos: (id) => FetchJson.get(`/photos/${id}/related`),

    searchPhoto: (data) => FetchJson.get('/search/photos',data),
    searchPhotoRelated: (data) => FetchJson.get('/search/',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    fetchPhotoById: (id) => FetchJson.get(`/photos/${id}`),
    fetchUserPhoto: (id,data) => FetchJson.get(`/users/${id}/photos/`,data),

    getTopicById: (id) => FetchJson.get(`/topics/${id}/`),
    getRandomPhoto: () => FetchJson.get(`/photos/random`),
    getMe: () => FetchJson.get(`/me`),
    getTopicPhotosById: (id,data) => FetchJson.get(`/topics/${id}/photos/`,data),
    getUserProfile: (id) => FetchJson.get(`/users/${id}/`),
    getRelatedCollection: (id,data) => FetchJson.get(`/collections/${id}/related/`,data),

    likePhoto: (id) => FetchJson.post(`/photos/${id}/like`),
    unlikePhoto: (id) => FetchJson.delete(`/photos/${id}/like`),
    likedPhotos: (username) => FetchJson.get(`/users/${username}/likes`),
}

export default Api;