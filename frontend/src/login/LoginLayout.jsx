import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './login.css';
import Welcome from './components/Welcome';
import LoginAsAdminForm from './components/LoginAsAdminForm';
import LoginAsUserForm from './components/LoginAsUserForm';
import RegisterForm from './components/RegisterForm';
import Team from "./components/Team";

function LoginLayout() {
  const [activeForm, setActiveForm] = useState(null);

  const handleClose = () => {
    setActiveForm(null);
  };

  return (
    <div className="login-app">
      <div className="App">
        <header className="header">
          <Link to="/login" className="logo">S0I 2024</Link>
          <nav className="navbar">
            <Link to="/login">Home</Link>
            <Link to="/login/about">About</Link>
            <button className="btnLogin-popup" onClick={() => setActiveForm('admin')}>Admin Login</button>
            <button className="btnLogin-popup" onClick={() => setActiveForm('user')}>User Login</button>
            <button className="btnLogin-popup" onClick={() => setActiveForm('register')}>Register</button>
          </nav>
        </header>

        <RouteTransition>
          <Routes>
            <Route index element={
              <section className="section">
                <div className="wrap">
                  <Welcome />
                </div>
              </section>
            } />
            <Route path="about" element={<Team />} />
          </Routes>
        </RouteTransition>

        <div className={`wrapper ${activeForm ? 'active-popup' : ''}`}>
          <LoginAsAdminForm isActive={activeForm === 'admin'} onClose={handleClose} />
          <LoginAsUserForm isActive={activeForm === 'user'} onClose={handleClose} />
          <RegisterForm isActive={activeForm === 'register'} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
}

function RouteTransition({ children }) {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default LoginLayout;
