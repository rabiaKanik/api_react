import  axios  from 'axios';

let store = JSON.parse(localStorage.getItem('persist:root'))
const token=JSON.parse(store.token)

export const request = axios.create({
    baseURL: "https://reqres.in/api/signup",
    headers: {
        Authorization : `Bearer ${token}`
    }
})