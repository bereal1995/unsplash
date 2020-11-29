import FetchJson from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    searchPhoto: (data) => FetchJson.get('/search/photos',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
}

export default Api;