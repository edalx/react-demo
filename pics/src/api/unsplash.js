import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bI10veicCJ0XYWUFGMETAxySYgYJhofo_w-xCe71H0A'
    }
});