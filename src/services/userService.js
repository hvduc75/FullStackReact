import axios from "../axios";

const handleLoginApi = (email, paaaword) => {
    return axios.post('/api/login');
}

export default handleLoginApi;
