import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import LoginAsAdminForm from './components/LoginAsAdminForm';
import LoginAsUserForm from './components/LoginAsUserForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [activeForm, setActiveForm] = useState(null);

  const handleClose = () => {
    setActiveForm(null);
  };

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">S0I 2024</a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <button className="btnLogin-popup" onClick={() => setActiveForm('admin')}>Admin Login</button>
          <button className="btnLogin-popup" onClick={() => setActiveForm('user')}>User Login</button>
          <button className="btnLogin-popup" onClick={() => setActiveForm('register')}>Register</button>
        </nav>
      </header>

      <section className="section">
        <div className="wrap">
          <Welcome />
        </div>
      </section>

      <div className={`wrapper ${activeForm ? 'active-popup' : ''}`}>
        <LoginAsAdminForm isActive={activeForm === 'admin'} onClose={handleClose} />
        <LoginAsUserForm isActive={activeForm === 'user'} onClose={handleClose} />
        <RegisterForm isActive={activeForm === 'register'} onClose={handleClose} />
      </div>
    </div>
  );
}

export default App;
