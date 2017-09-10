import axios from 'axios';

const HTTP = {
    get : (url, params, callback) => {
        axios.get(url, params)
            .then(resp => callback(resp.data)).catch(function (error) {
            console.log(error);
        });
    }
}



export default HTTP;