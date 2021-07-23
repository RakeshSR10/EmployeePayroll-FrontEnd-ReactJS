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
    editEmployee = (empData, empId)=>{
        return Axios.put(`/updateEmployee/${empId}`,
        empData,{
          headers: {
            'token': token
          },
        });
    }

    getEmployee = (empId)=>{
        return Axios.get(`/getEmployee/${empId}`,{
          headers: {
            'token': token
          },
        });
    }
    
    removeEmployee = (empId)=>{
        return Axios.delete(`/deleteEmployee/${empId}`,{
          headers: {
            'token': token
          },
        });
    }
    
}