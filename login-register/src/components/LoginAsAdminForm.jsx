import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginAsAdminForm = ({ isActive, onClose }) => {

    const [email, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
      const loginAdmin = async () => {
        try {
          const res = await axios.post('http://localhost:3000/admin/login', {
            
            email,
            password
          });
          console.log('Admin Login response:', res.data);
          if (res.status === 200) {
            const adminData={
              adminId:res.data.admin._id,
              adminName:res.data.admin.name,
              adminEmail:res.data.admin.email
          };
            alert("Admin Login Successful");
            Cookies.set('adminId', JSON.stringify(adminData), { path: '/', sameSite: 'strict' });
           // Cookies.set('')
            window.location.href = 'http://localhost:5174';
          } else {
            alert(res.data.error || 'Admin Login failed');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        } finally {
          setSubmitted(false);
        }
      };
      loginAdmin();
    }
  }, [submitted,  email, password]);

  return (
    <div className={`wrapper ${isActive ? 'active-popup' : ''}`}>
      <div className="icon-close" onClick={onClose}>&times;</div>
      <div className="form-box login">
        <h2>Login as Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" required 
             value={email} 
             onChange={(e) => setCollegeEmail(e.target.value)}  />
            <label>Email</label>
            <i className="icon"></i>
          </div>
          <div className="input-box">
            <input type="password" required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}  />
            <label>Password</label>
            <i className="icon"></i>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAsAdminForm;
