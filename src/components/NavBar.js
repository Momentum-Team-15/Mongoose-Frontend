import { Link } from "react-router-dom";
import axios from "axios"; 

export const NavBar = ({ setLogin, username, token }) => { 

    const handleLogout = () => {
        axios
            .post('https://mongoosesocial.onrender.com/auth/token/logout', 
            { headers: { Authorization: `Token ${token}`, }, })
            .then(() => setLogin('',null))
            .catch(() => setLogin('',null)) 
    }

    return (
        <header className="header"> 
        <h1 className="head">Sush-it-up, Sushi Roll!</h1>
                <nav className="navbar">
                    <button><Link to="/MySushi">My Sushi</Link></button>
                    <button><Link to="/all">All Sushi</Link></button>
                    <button><Link to="/Friends">Sushi Friends</Link></button> 
                    <button><Link to="/MakeRoll">Build a Roll</Link></button>
                    <button><Link to="/Login" onClick={() => setLogin(null)}>Log Out. See you soon!</Link></button> 
                </nav>
        </header >
    )
}
