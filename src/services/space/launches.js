import axios from 'axios';
let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com',
    headers:{}
})
const getLaunches = () => {
  return axiosInstance.get('/v3/launches/')
}

export {
    getLaunches
}