import axios from 'axios'
import { useState } from 'react'

export const Login = ({ setLogin }) => {

    return(
        <div> 
            <header className="head">
                <h2 className="sushi">Let us roll up some credentials.</h2>
            </header>
            <div className="login">
                <div className="field">
                    <input className="input" type="text" placeholder="username" /> 
                </div>
                <div className="field">
                    <input className="input" type="password" placeholder="password" />
                </div>
                <div className="field">
                    <h3 className="click">
                        <button className="button" onClick={() => (setLogin(true))}>
                        Log In Here!</button>
                    </h3>
                </div>
            </div>  
        </div>
    )
}