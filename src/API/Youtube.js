import axios from 'axios';

const KEY = 'AIzaSyAxT_UiBycemc6IAcKBrhvl94ixL2GkfVg';

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        maxResults : 10,
        key : KEY
    }
});
