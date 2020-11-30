import FetchJson from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    searchPhoto: (data) => FetchJson.get('/search/photos',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
    searchTopics: (id,data) => FetchJson.get(`/topics/${id}/photos/`,data),

    fetchUserPhoto: (id,data) => FetchJson.get(`/users/${id}/photos/`,data),
}

export default Api;