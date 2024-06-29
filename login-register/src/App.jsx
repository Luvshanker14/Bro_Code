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
        <a href="#" className="logo">Logo</a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <button className="btnLogin-popup" onClick={() => setActiveForm('admin')}>LoginAsAdmin</button>
          <button className="btnLogin-popup" onClick={() => setActiveForm('user')}>LoginAsUser</button>
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
