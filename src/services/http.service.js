import axios from "axios";

axios.defaults.baseURL = 'https://QQQQjsonplaceholder.typicode.com/'
const httpService = {
    get: axios.get,
}

export default httpService