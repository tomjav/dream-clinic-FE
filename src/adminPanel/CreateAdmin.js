import React from 'react';
import HTTP from "../common/http";

const CreateAdmin = () => {

    HTTP.post("register/doctor", () => console.log("done"), {
        "username" : "admin",
        "password" : "1111",
        "name" : "admin",
        "surname" : "admin"
    });

    return (
        <div>
            done
        </div>
    )
};

export default CreateAdmin;