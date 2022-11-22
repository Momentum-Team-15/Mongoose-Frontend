import './App.css';
import { NavBar } from "./components/NavBar"; 
import { Login } from "./components/login"; 
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 


function App({ rollData }) {
  const [login, setLogin] = useState(null)

  return (
    <section class="container">

     <div class="App">
      <h1>Fresh. Raw. Social Sushi.</h1>
      </div>
      <NavBar /> 
    </section>
  );
}

export default App;
