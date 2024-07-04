import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import Account from "./Pages/Ad_account.jsx";
import Home from "./Pages/Ad_home.jsx";
import Books from "./Pages/Books.jsx";
import Status from "./Pages/Status.jsx";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App(){
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
            <Route path="/status" element={<Status />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}



export default App;