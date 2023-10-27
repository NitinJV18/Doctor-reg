import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const showLoginComponent = () => {
    setShowLogin(true);
    setShowRegistration(false); // Hide the registration component
  };

  const showRegistrationComponent = () => {
    setShowRegistration(true);
    setShowLogin(false); // Hide the login component
  };

  return (
    <div className="App form-container">
      <div className="landing-buttons">
        <button className="submit-button" onClick={showLoginComponent}>Login</button>
        <button className="submit-button" onClick={showRegistrationComponent}>Register</button>
      </div>
      {showLogin && <Login />}
      {showRegistration && <Registration />}
    </div>
  );
}

export default App;
