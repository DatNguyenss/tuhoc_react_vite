// import axios from "axios";
import axios from './axios.customize';

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
    //alert("click me")
}

const updateUserAPI = () => {

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user?current=1&pageSize=1";
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI
}

