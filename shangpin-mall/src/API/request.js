import axios from 'axios';


const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
});

requests.interceptors.request.use((config) => {
    return config
})

requests.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(new Error(String(error)))
})

export default requests


