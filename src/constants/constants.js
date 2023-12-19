import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http://localhost:5001',
    // headers:{'Content-Type': 'application/json'}
})
axiosInstance.defaults.withCredentials=true

export {axiosInstance}