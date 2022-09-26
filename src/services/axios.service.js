
import {baseURL} from "../configs";

import axios from 'axios';

let axiosService = axios.create({baseURL});

export {
    axiosService
}