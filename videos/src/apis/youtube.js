import axios from 'axios';

const KEY = 'AIzaSyCNJdHPOFnM1PKALka_wsIm3dVdSpjUpUM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});