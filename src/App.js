import React from 'react';
import './App.css';
import Registration from './pages/registerForm.jsx'
import Login from './pages/loginForm.jsx'; 
import Dashboard from './components/dashboard.jsx';
import AddEmployee from './components/addEmployee.jsx';
import { ListEmployees } from './components/employeesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
require('dotenv').config()

const App = () => {
  return (
    <Router >
      <div className="App">
          <Switch>
          <Route exact path='/' component={Login} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
          </Switch>
      
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/addEmployee' component={AddEmployee} />
          <Route path='/dashboard/employeesList' component={ListEmployees}></Route>
      </div>
    </Router>
  )
}

export default App;