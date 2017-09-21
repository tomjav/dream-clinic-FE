import axios from 'axios';
import CONSTANT from "./constants";

const HTTP = {
    get: (url, callback, params, auth) => {
        let config = {};
        if(auth){
            config.headers = {authorization: localStorage.getItem('token')}
        }
        const requestURL = CONSTANT.APP_URL + url;
        console.log("REQUEST WITH PARAMS:" + requestURL);
        console.log(params);
        if (typeof params !== "object") {
            axios.get(requestURL, config)
                .then(resp => callback(resp.data)).catch(function (error) {
                console.log(error);
            });
        } else {
            config.params = params;
            axios.get(requestURL, config)
                .then(resp => callback(resp.data)).catch(function (error) {
                console.log(error);
            });
        }
    },
    post: (url, callback, dto) => {
        const requestURL = CONSTANT.APP_URL + url;
        console.log("POST");
        console.log(requestURL);
        console.log(dto);
        axios.post(requestURL, dto)
            .then(resp => callback(resp.data)).catch(function (error) {
            console.log(error);
        });
    }
};


export default HTTP;