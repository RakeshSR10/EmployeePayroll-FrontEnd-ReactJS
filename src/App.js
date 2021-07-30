import React from 'react';
require('dotenv').config()
import './App.css';
import Registration from './pages/registerForm.jsx'
import Login from './pages/loginForm.jsx'; 
import Dashboard from './components/dashboard.jsx';
import AddEmployee from './components/addEmployee.jsx';
import { ListEmployees } from './components/employeesList.jsx';
import UpdateEmployee from './components/updateEmployee.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter >
      <div className="App">
        
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
          </Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/dashboard/addEmployee' component={AddEmployee} />
            <Route path='/dashboard/employeesList' component={ListEmployees}></Route>
            <Route path='/dashboard/updateEmployee/:empId' component={UpdateEmployee}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;