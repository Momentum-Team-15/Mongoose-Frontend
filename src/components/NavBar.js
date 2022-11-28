import { Link } from "react-router-dom";
import axios from "axios"; 

export const NavBar = ({ setAuth, username, token }) => { 

    const handleLogout = () => {
        setAuth(null, '')
        axios.post('https://mongoosesocial.onrender.com/auth/token/logout', {},
            { headers: { Authorization: `Token ${token}`, }, })
    }

    return (
        <header className="header"> 
        <h1 className="head">Sush-it-up, Sushi Roll!</h1>
                <nav className="navbar">
                    <button><Link to="/all">All Sushi</Link></button>
                    <button><Link to="/Friends">Sushi Friends</Link></button> 
                    <button><Link to="/MakeRoll">Build a Roll</Link></button>
                    <button><Link to="/" onClick={() => setAuth(null)}>Log Out. See you soon!</Link></button> 
                </nav>
        </header >
    )
}