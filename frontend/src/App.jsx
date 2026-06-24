import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginLayout from './login/LoginLayout';
import AdminLayout from './admin/AdminLayout';
import UserLayout from './UserLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login/*" element={<LoginLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
