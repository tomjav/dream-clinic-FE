import axios from 'axios';
import CONSTANT from "./constants";

const HTTP = {
    get : (url, params, callback) => {
        axios.get(CONSTANT.APP_URL + url, params)
            .then(resp => callback(resp.data)).catch(function (error) {
            console.log(error);
        });
    }
}



export default HTTP;