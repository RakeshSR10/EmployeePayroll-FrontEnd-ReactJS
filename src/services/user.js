import Axios from 'axios';
require('dotenv').config()
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const BaseURL = process.env.REACT_APP_BASE_URL
console.log(BaseURL);

class User {
    
    login = (loginDetails) => {
        return Axios.post("/login", loginDetails)
            .then(res => {
            alert("Login Successfully");
            localStorage.setItem('Login token = ', res.data.token);
            })
            .catch((error) => {
            console.log(error.message);
        })
    }
    
    register = (user) => {
        return Axios.post("/register", user).then(res => {
            alert("User Registered Successfully")
            console.log(res.data.message);
        }).catch(error => {
            alert(error.message);
        })
    }
}

export default User;