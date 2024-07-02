import React, { useState } from 'react';
import Status from "./pages/Status";
import Navbar from './pages/Navbar';
import Account from "./pages/Account";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; 
import Books from './pages/Book';
 import Home from './pages/Home';
import Darkmode from './pages/Darkmode';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

 
 

function App() {
  const [selected, setSelected] = useState('Home');

  return (
    <Router>
      <div className='flex bg-slate-200 dark:bg-black'>
        <Navbar selected={selected} setSelected={setSelected} />
        <MainContent />
      </div>
    </Router>
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
            <Route path="/books" element={<Books />} />
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}




function HomeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
      <path fill="currentColor" d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z" />
    </svg>
  );
}




function StatusIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" fill="none" viewBox="0 0 36 37" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" fill="currentColor" strokeLinejoin="round" stroke="currentColor" d="M9.9 3.616H4.5a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm21.6 21.6h-5.4a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm-23.4-1.8v-10.8H6.3v10.8a6.307 6.307 0 0 0 6.3 6.3h10.8v-1.8H12.6a4.506 4.506 0 0 1-4.5-4.5Zm19.8-10.8v10.8h1.8v-10.8a6.307 6.307 0 0 0-6.3-6.3H12.6v1.8h10.8a4.505 4.505 0 0 1 4.5 4.5Z" />
    </svg>
  );
}


export default App;