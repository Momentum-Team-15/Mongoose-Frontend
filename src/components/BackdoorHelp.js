import axios from 'axios'; 

export const requestLogin = (username, password) => {
    const url = 'https://mongoosesocial.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        username: username,
        password: password})
    return response
}