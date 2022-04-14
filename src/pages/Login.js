import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import axios from "axios";
import { Context } from "../context/Context"
import './Register.css'
import {Register} from './Register'


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    // const { dispatch, isFetching} = useContext(Context);


    // const handleSubmit = async (e) => {
    //     console.log('thank you!')
    // }
    //     dispatchEvent({ type: "LOGIN_START"});

    //     try {
    //         const res = await axios.post("/auth/login", {
    //             username: userRef.current.value,
    //             password: passwordRef.current.value
    //         });
    //         dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data});
    //     } catch (err) {
    //         dispatch({ type: "LOGIN_FAILURE"});
    //     }
    // };


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
            />    
            <br></br>
            <label className = "passwordFormat"> Password </label>
            <br></br>
            <input 
                type = "password"
                className = "loginInput"
                placeholder = "Enter your password"
                ref = {passwordRef}
            /> 
            <br>
            </br>  
            <button className = "loginButton" type = "submit">
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

