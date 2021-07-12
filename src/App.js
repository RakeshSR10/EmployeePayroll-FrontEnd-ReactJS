import React from 'react';
import './App.css';
import Register from './pages/registerForm.js'
import Login from './pages/loginForm.js'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <div className="App">
          <Switch>
          <Route exact path='/' component={Register} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
      </div>
    </Router>
  )
}

export default App;