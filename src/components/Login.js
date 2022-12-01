import axios from 'axios'; 
import { useState } from 'react'; 
import { useNavigate, Link }from "react-router-dom"; 
import { requestLogin } from "./BackdoorHelp"; 

export const Login = ({ setLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('') 
    const [error, setError] = useState('null') 

    const handleSubmit = (event) => {
        event.preventDefault() 
        setError(null)
        requestLogin(username, password) 
        .then((res) => {
            const token = res.data.auth_token
            setLogin(token, username) 
            navigate("/all") 
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    return(
        <div> 
            <header className="head">
            <h2 className="sushi">Roll up your credentials: 🍱</h2>
            </header>

            <form className="login">
                <div className="field">
                    <input className="input" type="text" placeholder="username" 
                    onChange={(e) => setUsername(e.target.value)}/> 
                </div>
                <div className="field">
                    <input className="input" type="password" placeholder="password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="field">
                    <p className="click">
                        <button className="button" onClick={handleSubmit}>Log In Here!</button>
                    </p>
                    <Link to="/Register">New User? Register Here!</Link>
                </div>
            </form>  
        </div>
    )
}