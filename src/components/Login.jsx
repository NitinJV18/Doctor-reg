import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setError(''); 

   
    if (!email || !password) {
      setError('Please fill in both email and password fields.');
      return;
    }

    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password123';

    if (email === dummyEmail && password === dummyPassword) {
      alert('Login successful!'); 
    } else {
      setError('Invalid email or password.');
    }
};

  return (
    <div>
      <h2 className='main-title'>Login</h2>
      <form className='form-container-in'>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='submit-button' onClick={handleLogin}>Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
