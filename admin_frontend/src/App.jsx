import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import Account from "./Pages/Ad_account.jsx";
import Home from "./Pages/Ad_home.jsx";
import Books from "./Pages/Books.jsx";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css";


function App(){
    const [selected, setSelected] = useState('Home');


    return(
        <div className="flex  bg-slate-200 dark:bg-black">
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent selected={selected}/>
    </div>);
      
}


function MainContent({ selected }) {
  return (
    <TransitionGroup className="main-content">
      <CSSTransition
        key={selected}
        timeout={300} // Duration of the transition in milliseconds
        classNames="page" // Class name prefix for transition styles
      >
    <div className="flex-1 p-2 page dark:bg-black">
      {/* Render different components based on the selected menu */}
      {selected === 'Books' && <Books />}
      {selected === 'Home' && <Home />}
      {selected === 'Account' && <Account />}
    </div>
  </CSSTransition>
  </TransitionGroup>
  );
}



export default App;