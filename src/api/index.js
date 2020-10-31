import axios from 'axios';
const axiosInstance = axios.create({
   baseURL: 'http://localhost:8080'
});

const request = async (url, method, data = {}) => {



    try {
        const axiosConfig = {
            url,
            method,
            ...data,
        }

        return (await axios(axiosConfig));
    } catch (e) {

    }

}


const Api = {
    fetchTodos: (data) => request("http://localhost:8080/todo",'get', {params: data}),
    addTodo: (data) => request("http://localhost:8080/todo",'post', {data: data}),
    deleteTodo : (id) => request(`http://localhost:8080/todo/${id}`, 'delete',),
}

export default Api;