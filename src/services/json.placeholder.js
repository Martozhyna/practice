import {axiosService} from "./axios.service";
import {urls} from "../configs";

const jsonPlaceholder = {
    getTodos: () => axiosService.get(urls.todos),
    getAlbums: () => axiosService.get(urls.albums),
    getComments: () => axiosService.get(urls.comments),
    getPosts: () => axiosService.get(urls.posts),
    getPostComments: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {jsonPlaceholder}