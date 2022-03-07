import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import './Register.css'
import axios from "axios";
import { Context } from "../context/Context"


export default function Register() {
    const userRef = useRef();
    const passwordRef = useRef();
    const agreementRef = useRef();
    const { dispatch, isFetching} = useContext(Context);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatchEvent({ type: "LOGIN_START"});

        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE"});
        }
    };


return(

<div className = "loginPage">
    <section className = "registerSection">
        <header className = "websiteLogo">
            <a href = "/" >
            NextDayBeats.com
            </a>
        </header>
        <h1 className = "signIn">
            Create an account <br></br>& <br></br> Start sharing your productions! 
            
        </h1>

        <form className = "loginForm" onSubmit = {handleSubmit}>
            <label className = "usernameFormat"> Your username </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Set a username for your profile"
                ref = {userRef}
            />    
            <br></br>

            <label className = "usernameFormat"> Your email </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Type your email"
                ref = {userRef}
            />    
            <br></br>

            <label className = "passwordFormat"> Password </label>
            <br></br>
            
            <input 
                type = "password"
                className = "loginInput"
                placeholder = "Type your password"
                ref = {passwordRef}
            /> 
            <br>
            </br>  
            <label className = "passwordFormat"> Confirm Password </label>
            <br></br>
            <input 
                type = "password"
                className = "loginInput"
                placeholder = "Type your password again"
                ref = {passwordRef}
            /> 

            <label className = "checkboxFormat">
            <input 
                type = "checkbox"
                className = "signupAgreement"
                ref = {agreementRef}
            /> 
            <span class = 'checkboxLabel'>
            I have read and agree to the 
            <a target = "_blank" href = "/https://nextdaybeats.com/terms-of-service">Terms of service & privacy policy </a>
            </span>
            </label>


            <button className = "loginButton" type = "submit">
                Sign up
            </button>

        </form>
        
        {/* <h2 class = "hr1">
        </h2>
        <span class = "orSpan">
            OR
        </span>
        
        <form class = "registerForm">
        <button className = "loginRegisterButton">
            <a className = "registerLink" href = "/register" >
                Register
            </a>
        </button>
        </form> */}
        
    </section>

</div>


);
}

