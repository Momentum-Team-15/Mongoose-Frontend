import './App.css';
import React, { useState } from "react"; 
import { NavBar } from "./components/NavBar"; 
import { Login } from "./components/Login"; 
import { Friends } from "./components/Friends"; 
import { MySushi } from "./components/MySushi"; 
// import { Allsushi } from "./components/Allsushi"; 
import { Routes, Route } from "react-router-dom"; 


function App({cardData }) {
  const [login, setLogin] = useState('')

  return (

    <section>
     <div class="App">
      <h2>Fresh. Raw. Social Sushi.</h2>
      </div> 

      {login ? (
        <div>
          <NavBar 
          setLogin={setLogin} /> 
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/friends" element={<Friends />} /> 
          </Routes>
          </div> 
      ): ( 
        <div>
          <Login 
          setLogin={setLogin}/> 
        </div>)}

      </section>
  );
} 

export default App;
