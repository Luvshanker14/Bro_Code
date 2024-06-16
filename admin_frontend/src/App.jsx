import React,{useState} from "react";
import Navbar from "./Navbar.jsx";

function App(){
    const [selected, setSelected] = useState('Home');


    return(
        <div className="bg-white flex">
      <Navbar selected={selected} setSelected={setSelected} />
    </div>);
      
}


export default App;