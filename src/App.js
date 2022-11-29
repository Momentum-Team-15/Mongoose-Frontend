import './App.css';

import React, { useState } from "react"; 
import { NavBar } from "./components/NavBar"; 
import { Login } from "./components/Login"; 
import { Friends } from "./components/Friends"; 
import { MySushi } from "./components/MySushi"; 
import { MakeRoll } from "./components/MakeRoll"; 
import { Allsushi } from "./components/Allsushi"; 
import { Routes, Route } from "react-router-dom"; 
import useLocalStorageState from 'use-local-storage-state'; 


function App({ rollData }) {
  const [token, setToken] = useLocalStorageState("token", null)
  const [username, setUsername] = useLocalStorageState("username", '') 

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username) 
  }

  const isLoggedIn = token 

import { NavBar } from "./components/NavBar";


  return (


    <section>
     <div class="App">
      <h2>Fresh. Raw. Social Sushi.</h2>
      </div> 

      {isLoggedIn ? (
        <div>
          <NavBar token={token} setAuth={setAuth} username={username}/> 
          <Routes>
            <Route path="/all" element={<Allsushi data={rollData}/>} />
            <Route path="/Friends" element={<Friends />} /> 
            <Route path='/MySushi' element={<MySushi />} /> 
            <Route path="/MakeRoll" element={<MakeRoll username={username} data={rollData}/>} />
            <Route path="/" element={<Login />} /> 
          </Routes>
          </div> 
      ) : ( 
        <div>
          <Login 
          setAuth={setAuth}/> 
        </div>)}

      </section>
=======
    <section>
      <div className="App">
        <h2>Fresh. Raw. Social Sushi.</h2>
      </div>
      <NavBar />
      
    </section>

  );
} 

export default App;
