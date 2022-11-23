import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = ({ setLogin }) => { 
    return (
        <header className="header"> 
        <h1 className="head">Sush-it-up, Sushi Roll!</h1>
                <nav className="navbar">
                    <button><Link to="/all">All Sushi</Link></button>
                    <button><Link to="/mycards">Your Sushi</Link></button>
                    <button><Link to="/friends">Sushi Friends</Link></button> 
                    <button><Link to="/create">Build a Roll</Link></button>
                    <button><Link to="/" onClick={() => setLogin(null)}>Log Out. See you soon!</Link></button> 
                </nav>
        </header >
    )
}