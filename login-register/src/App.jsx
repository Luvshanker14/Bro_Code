import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import LoginAsAdminForm from './components/LoginAsAdminForm';
import LoginAsUserForm from './components/LoginAsUserForm';
import RegisterForm from './components/RegisterForm';
import Team from "./components/Team";

function App() {
  const [activeForm, setActiveForm] = useState(null);

  const handleClose = () => {
    setActiveForm(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/" className="logo">S0I 2024</Link>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button className="btnLogin-popup" onClick={() => setActiveForm('admin')}>Admin Login</button>
            <button className="btnLogin-popup" onClick={() => setActiveForm('user')}>User Login</button>
            <button className="btnLogin-popup" onClick={() => setActiveForm('register')}>Register</button>
          </nav>
        </header>

        <Routes>
          <Route exact path="/" element={
            <section className="section">
              <div className="wrap">
                <Welcome />
              </div>
            </section>
          } />
          <Route path="/about" element={<Team />} />
        </Routes>

        <div className={`wrapper ${activeForm ? 'active-popup' : ''}`}>
          <LoginAsAdminForm isActive={activeForm === 'admin'} onClose={handleClose} />
          <LoginAsUserForm isActive={activeForm === 'user'} onClose={handleClose} />
          <RegisterForm isActive={activeForm === 'register'} onClose={handleClose} />
        </div>
      </div>
    </Router>
  );
}

export default App;
