import React from 'react';
require('dotenv').config()
import './App.css';
import Registration from './pages/registerForm.jsx'
import Login from './pages/loginForm.jsx'; 
import Dashboard from './components/dashboard.jsx';
import AddEmployee from './components/addEmployee.jsx';
import { ListEmployees } from './components/employeesList.jsx';
import UpdateEmployee from './components/updateEmployee.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <div className="App">
          <Switch>
          <Route exact path='/' component={Login} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addEmployee' component={AddEmployee} />
            <Route path='/employeesList' component={ListEmployees}></Route>
            <Route path='/updateEmployee' component={UpdateEmployee}></Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App;