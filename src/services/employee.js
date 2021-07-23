import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
let token = localStorage.getItem('token');

export class Employee {
    addEmployee = (employeeDetails) => {
        return Axios.post('/addEmployee', employeeDetails, {
            headers: {
                'token': token
            },
        });
    }
    
    getAllEmployees = () => {
        return Axios.get('/getEmployees', {
            headers : {
                'token': token
            }
        })
    }

    
}