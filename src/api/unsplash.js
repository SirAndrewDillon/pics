import axios from 'axios'


export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 28af207bd2108480b312ec410796e5315acd5530e530ae9f81e93bd1f46cf1ad'
      }
})