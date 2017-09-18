import axios from 'axios';
import CONSTANT from "./constants";

const HTTP = {
    get: (url, callback, params) => {

        const requestURL = CONSTANT.APP_URL + url;
        console.log("REQUEST WITH PARAMS:" + requestURL)
        console.log(params);
        if (typeof params !== "object") {
            axios.get(requestURL)
                .then(resp => callback(resp.data)).catch(function (error) {
                console.log(error);
            });
        } else {
            axios.get(requestURL, {params: params})
                .then(resp => callback(resp.data)).catch(function (error) {
                console.log(error);
            });
        }
    },
    post: (url, callback, dto) => {
        const requestURL = CONSTANT.APP_URL + url;
        axios.post(requestURL, dto)
            .then(resp => callback(resp.data)).catch(function (error) {
            console.log(error);
        });
    }
};


export default HTTP;