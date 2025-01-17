import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RegisterForm = ({ isActive, onClose }) => {
  const [name, setUsername] = useState('');
  const [email, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const registerUser = async () => {
        try {
          const res = await axios.post('http://localhost:3000/user/register', {
            name,
            email,
            password
          });
          console.log('Register response:', res.data);
          if (res.status === 200) {
            alert("Registration Successful");
          } else {
            alert(res.data.error || 'Registration failed');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        } finally {
          setSubmitted(false);
        }
      };
      registerUser();
    }
  }, [submitted, name, email, password]);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`wrapper ${isActive ? 'active-popup' : ''}`}>
      <div className="icon-close" onClick={onClose}><p style={{fontSize:"40px"}}>&times;</p></div>
      <div className="form-box login">
        <h2 style={{color:"white",fontFamily:"sans-serif",fontSize:"32px"}}>New User Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              required 
              value={name} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label>Username</label>
            <i className="icon"></i>
          </div>
          <div className="input-box">
            <input 
              type="text" 
              required 
              value={email} 
              onChange={(e) => setCollegeEmail(e.target.value)} 
            />
            <label>College Email</label>
            <i className="icon"></i>
          </div>
          <div className="input-box">
            <input 
              type={passwordVisible ? 'text' : 'password'}  
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <label>Password</label>
            <i
              className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'}`}
              style={{ color: 'white', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
