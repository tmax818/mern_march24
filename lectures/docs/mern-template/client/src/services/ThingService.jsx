import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});


export const createThing = thing => {
    return http.post('/things', thing)
        .then(res => res.data)
        .catch(err => {throw err})
}

export function getAllThings() {
    return http.get('/things')
        .then(res => res.data)
        .catch(err => {throw err})
}

export const getOneThing = (id) => {
    return http.get(`/things/${id}`)
        .then(res => res.data)
        .catch(err => {throw err})
} 

export const updateThing = (id, thing )=> {
    return http.put(`/things/${id}`, thing)
        .then(res => res.data)
        .catch(err => {throw err})
}

export const deleteOneThing = id => {
    return http.delete(`/things/${id}`)
        .then(res => res.data)
        .catch(err => {throw err})
}