import FetchJson from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    searchPhoto: (data) => FetchJson.get('/search/photos',data),
}

export default Api;