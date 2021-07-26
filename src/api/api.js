import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://boiling-refuge-66454.herokuapp.com/"
})

export const api = {
    getListOfPhoto() {
        return instance.get(`images`)
    },
    getInfoByPhoto(id) {
        return instance.get(`images/${id}`)
    },
    sendComment(id, form) {
        return instance.post(`images/${id}/comments`, form)
    }
}