import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

function App(){
    const [selected, setSelected] = useState('Home');


    return(
        <div className="bg-white flex">
      <Navbar selected={selected} setSelected={setSelected} />
      <Home />
    </div>);
      
}


export default App;