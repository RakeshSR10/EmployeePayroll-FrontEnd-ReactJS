import React from 'react';
import './App.css';
import Register from './components/pages/registerForm.js';
import Login from './components/pages/loginForm.js'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/*function App() {
  return (
        <div className="App">
          <Register />
          <Login />
        </div> 
        );
}*/
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