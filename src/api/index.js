import FetchJson from "../lib/Fetch";


const Api = {
    fetchPhoto: (data) => FetchJson.get('/photos',data),
    searchPhoto: (data) => FetchJson.get('/search/photos',data),

    fetchTopics: (data) => FetchJson.get('/topics',data),
    searchTopics: (id,data) => FetchJson.get(`/topics/${id}/photos/`,data),
}

export default Api;

// https://api.unsplash.com/photos/?client_id=0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA&photos
// https://api.unsplash.com/search/photos/?client_id=0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA&query=apple
// https://api.unsplash.com/topics/nature/photos/?client_id=0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA
// https://api.unsplash.com/topics/Interiors/photos/?client_id=0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA