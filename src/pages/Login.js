import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import axios from "axios";
import { Context } from "../context/Context"
import './Register.css'
import {Register} from './Register'
import bcrypt from 'bcryptjs'


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [email, setEmail] = useState("null");
    const [password, setPassword] = useState("null");
    // const { dispatch, isFetching} = useContext(Context);

    const hashSlinger = (hash) => {
        const saltRounds = 10;
        const plainTextPassword = password;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashResult = bcrypt.hashSync(hash, salt);
        return hashResult;
    }

    const PF = "http://localhost:8080/user/login"
    const handleSubmit = async (e) => {
        e.preventDefault();
         //dispatchEvent({ type: "LOGIN_START"});
        try {
            await axios.post(PF, {
                email: hashSlinger(email),
                password: hashSlinger(password)
            });
             //dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
             //dispatch({ type: "LOGIN_FAILURE"});
        }
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

