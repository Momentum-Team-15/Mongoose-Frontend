import axios from 'axios'; 

export const requestLogin = (username, password) => {
    const url = 'https://mongoosesocial.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        username: username,
        password: password})
    return response
}

export const requestCards = (token) => {
    const url = 'https://mongoosesocial.onrender.com/cards/'

    const response = axios.get(url, {
        headers: { 
            Authorization: `Token ${token}`}
        })
        return response
}

export const requestFavorite = () => {
    const url = 'https://mongoosesocial.onrender.com/cards/favorite'

    const response = axios.post(url)
        return response
}

export const requestFriend = () => {
    const url = 'https://mongoosesocial.onrender.com/users/friend'

    const response = axios.post(url) 
        return response 
}

