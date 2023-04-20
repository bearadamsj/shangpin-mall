import axios from 'axios';
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import store from '@/store';

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
});

requests.interceptors.request.use((config) => {
    nprogress.start()
    //add usertempID to config 
    if(store.state.detail.user_token){
        config.headers.userTempId = store.state.detail.user_token
        console.log(store.state.detail.user_token)
    }
    return config
})

requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error(String(error)))
})

export default requests


