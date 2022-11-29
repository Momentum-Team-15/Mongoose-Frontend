import axios from 'axios'; 
import { useState } from 'react'; 
import { useNavigate }from "react-router-dom"; 

export const Login = ({ setLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('') 

    const handleSubmit = (event) => {
        event.preventDefault() 
        axios.post('https://mongoosesocial.onrender.com/auth/token/login/', {
            username: username, 
            password: password})
        .then((res) => {
            const token = res.data.auth_token
            setLogin(token, username) 
            navigate("/all")
        })
    }

    return(
        <div> 
            <header className="head">
                <h2 className="sushi">Let us roll up some credentials.</h2>
            </header>

            <div className="login">
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
                </div>
            </div>  
        </div>
    )
}