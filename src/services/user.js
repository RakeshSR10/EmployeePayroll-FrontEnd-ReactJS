import Axios from 'axios';
require('dotenv').config()
Axios.default.baseURL = process.env.REACT_APP_BASE_URL;

class User {

    login = (loginDetails) => {
        Axios.post("/login", loginDetails).then(res => {
            console.log(res.data.message);
            }).catch((error) => {
            console.log(error.message);
        })
    }
    
    SignUpData = (employeeData) => {
        return Axios.post("/register", employeeData).then(res => {
            console.log(res.data.message);
        }).catch(error => {
            alert(error.message);
        })
    }
}

export default User;