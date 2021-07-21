import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

export class Employee {
    addEmployee = (employeeDetails) => {
        return Axios.post('/addEmployee', employeeDetails, {
            headers : {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}