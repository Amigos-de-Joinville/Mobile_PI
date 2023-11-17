import axios from 'axios'

const apianimais = axios.create({
  baseURL: 'https://django-pi-dev-rxrf.4.us-1.fl0.io/api/animais/'
})

export default apianimais
