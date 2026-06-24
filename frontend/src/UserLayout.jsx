import React, { useState } from 'react';
import Status from "./pages/Status";
import Navbar from './pages/Navbar';
import Account from "./pages/Account";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Books from './pages/Book';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';

function UserLayout() {
  const [selected, setSelected] = useState('Home');

  return (
    <div className='flex w-full min-h-screen bg-slate-200 dark:bg-black'>
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent />
    </div>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <TransitionGroup className="main-content">
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        <div className="flex-1 p-2 page dark:bg-black">
          <Routes location={location}>
            <Route path="books" element={<Books />} />
            <Route index element={<Home />} />
            <Route path="account" element={<Account />} />
            <Route path="status" element={<Status />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default UserLayout;
