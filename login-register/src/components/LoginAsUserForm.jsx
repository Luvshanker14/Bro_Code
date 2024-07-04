import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LoginAsUserForm = ({ isActive, onClose }) => {

    const [email, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here if needed
//     console.log('Login form submitted');
//   };

useEffect(() => {
    if (submitted) {
      const loginUser = async () => {
        try {
          const res = await axios.post('http://localhost:3000/user/login', {
            
            email,
            password
          });
          console.log('User Login response:', res.data);
          if (res.status === 200) {
            // const userId = res.data.user._id;
            const userData={
                userId:res.data.user._id,
                userName:res.data.user.name,
                userEmail:res.data.user.email
            };
            // console.log("userid",userId);
            alert("User Login Successful");
            // localStorage.setItem('user',JSON.stringify({...res.user,password:''}));
            Cookies.set('userId', JSON.stringify(userData), { path: '/', sameSite: 'strict' });
            // Cookies.set('')
            window.location.href = 'http://localhost:5173';
          } else {
            alert(res.data.error || 'User Login failed');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        } finally {
          setSubmitted(false);
        }
      };
      loginUser();
    }
  }, [submitted,  email, password]);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`wrapper ${isActive ? 'active-popup' : ''}`}>
      <div className="icon-close" onClick={onClose}><p style={{fontSize:"40px"}}>&times;</p></div>
      <div className="form-box login">
        <h2 style={{color:"white",fontFamily:"sans-serif",fontSize:"32px"}}>Login as User</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" required 
             value={email} 
             onChange={(e) => setCollegeEmail(e.target.value)}  />
            <label>College Email</label>
            <i className="icon"></i>
          </div>
          <div className="input-box">
            <input type={passwordVisible ? 'text' : 'password'} 
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}  />
            <label>Password</label>
            <i
              className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'}`}
              style={{ color: 'white', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAsUserForm;
