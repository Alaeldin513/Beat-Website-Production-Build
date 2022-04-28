import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import axios from "axios";
import { Context } from "../context/Context"
import './Register.css'
import PropTypes from 'prop-types'
import useToken from '../useToken'




export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState("null");
    const [password, setPassword] = useState("null");
    const [token , setToken ] = useState('null');
    // const { dispatch, isFetching} = useContext(Context);

    const PF = "http://localhost:8080/user/login"
    const handleSubmit = async (e) => {
        e.preventDefault();
         //dispatchEvent({ type: "LOGIN_START"});
        try {
            const tokenRes = await axios.post(PF, {
                email: email,
                password: password
            })
            console.log(tokenRes.data)
            setToken(tokenRes.data)
             //dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data});
        }
         catch (err) {
             //dispatch({ type: "LOGIN_FAILURE"});
        }
       // console.log(token)
    };


return(

<div className = "loginPage">
    <section className = "loginSection">
        <header className = "websiteLogo">
            <a href = "/" >
            NextDayBeats.com
            </a>
        </header>
        <h1 className = "signIn">
            Sign in to Continue
        </h1>

        <form className = "loginForm" >
            <label className = "usernameFormat"> Email </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Enter your email"
                ref = {emailRef}
                onChange = { (e) => setEmail(e.target.value) }
            />    
            <br></br>
            <label className = "passwordFormat"> Password </label>
            <br></br>
            <input 
                type = "password"
                className = "loginInput"
                placeholder = "Enter your password"
                ref = {passwordRef}
                onChange = { (e) => setPassword(e.target.value) }
            /> 
            <br>
            </br>  
            <button className = "loginButton" type = "submit" onClick = {handleSubmit}>
                Sign in
            </button>

        </form>
        
        <h2 class = "hr1">
        </h2>
        <span class = "orSpan">
            OR
        </span>
        
        <form class = "registerForm" action = "http://localhost:3000/register">
        
        
        <button className = "loginRegisterButton" >
            <div className = "registerLink"  >
                Register
            </div> 
        </button>
        

        </form>
        
    </section>

</div>


);
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
