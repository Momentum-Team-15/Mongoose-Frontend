import { Link } from "react-router-dom";

export const NavBar = ({ setLogin }) => { 
    return (
        <header> 
        <h2>Serving Board:</h2>
        <button> <Link to="/public">All The Sushi</Link> </button> 
        <button> <Link to="/create">Create</Link> </button> 
        <button> <Link to="/mycards">My Cards</Link> </button> 
        <button> <Link to="/Friend">Friendly Sushi</Link> </button>
        <button> <Link onClick={() => setLogin(null)} to="/">Log Out</Link> </button>
        </header> 
    )
}