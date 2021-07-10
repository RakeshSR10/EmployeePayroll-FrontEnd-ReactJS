import React from 'react';
import './App.css';
import Register from './components/pages/registerForm.js';
import Login from './components/pages/loginForm.js'; 


function App() {
  return (
        <div className="App">
          <Register />
          <Login />
        </div> 
        );
}

export default App;