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

  const setLogin = (token, username) => {
    setToken(token)
    setUsername(username) 
  }

  const isLoggedIn = token 

  return (

    <section className= "sushi-app">
     <div className="App-slug">
     <h2>Fresh. Raw. Social Sushi. 🍣</h2>
      </div> 

      {isLoggedIn ? (
        <div>
          <NavBar token={token} setLogin={setLogin} username={username}/> 
          <Routes>
            <Route path="/all" element={<Allsushi token={token}/>} />
            <Route path="/Friends" element={<Friends token={token}/>} /> 
            <Route path='/MySushi' element={<MySushi username={username} token={token}/>} /> 
            <Route path="/MakeRoll" element={<MakeRoll username={username} token={token}/>} />
            <Route path="/Login" element={<Login />} /> 
          </Routes>
          </div> 
      ) : ( 
        <div>
          <Login 
          setLogin={setLogin}/> 
        </div>)}

      </section>
  );
} 

export default App;