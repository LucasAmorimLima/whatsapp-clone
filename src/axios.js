import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-backend-nodejs.herokuapp.com'
})

export default instance