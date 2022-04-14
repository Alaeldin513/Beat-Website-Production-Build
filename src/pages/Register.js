import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import './Register.css'
import axios from "axios";
const crypto = require('crypto');
//import { Context } from "../context/Context"


export default function Register() {
    const userRef = useRef();
    const passwordRef = useRef();
    const agreementRef = useRef();

    const [artistName, setArtistName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [checkBox, setCheckBox] = useState(false);
    const[error, setError] = useState(undefined)

    //Stateless button true/false changer function for our checkbox
    const toggleCheckBox = () => {
        const prevValue = checkBox;
        setCheckBox(!prevValue);
    }
    //const { dispatch, isFetching} = useContext(Context);

    const PF = "http://localhost:8080/user/register"
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(password + confirmPassword + checkBox + email + artistName)
        
        if(password === confirmPassword && checkBox === true
        && password != "" && email != "" && artistName != "") {
        hashSlinger();  

        
        try {
            setError({type: 'success'});
            await axios.post(PF, {
                artistName,
                email,
                password
            })  &&  
            window.location.replace("/login")
        }
        catch (err) {
            console.log("error with post")
        }
        }
        else {
            setError({type: 'error'});
            console.log("please check to make sure fields are accurate")
        }
    };    

    const hashSlinger = async => {
        const salt = crypto.randomBytes(16).toString('hex');
        setPassword(crypto.pbkdf2Sync((password, salt, 1000, 64, 'sha256')).toString('hex'));
        setEmail(crypto.pbkdf2Sync((email, salt, 1000, 64, 'sha256')).toString('hex'));
        setConfirmPassword(crypto.pbkdf2Sync((confirmPassword, salt, 1000, 64, 'sha256')).toString('hex'));
        
    }

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

        <form className = "loginForm"  enctype = "multipart/form-data" >
            <label className = "usernameFormat"> Your username </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Type your artist name"
                ref = {userRef}
                name = "username"
                onChange = { (e) => setArtistName(e.target.value) }
            />    
            <br></br>

            <label className = "usernameFormat"> Your email </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Type your email"
                ref = {userRef}
                name = "email"
                onChange = { (e) => setEmail(e.target.value) }
            />    
            <br></br>

            <label className = "passwordFormat"> Password </label>
            <br></br>
            
            <input 
                type = "password"
                className = "loginInput"
                placeholder = "Type your password"
                ref = {passwordRef}
                name = "password"
                onChange = { (e) => setPassword(e.target.value) }
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
                onChange = { (e) => setConfirmPassword(e.target.value) }
            /> 

            <label className = "checkboxFormat">
            <input 
                type = "checkbox"
                className = "signupAgreement"
                ref = {agreementRef}
                onChange = {toggleCheckBox}
            /> 
            <span class = 'checkboxLabel'>
            I have read and agree to the 
            <a target = "_blank" href = "">Terms of service & privacy policy </a>
            </span>
            </label>


            <button className = "loginButton" type = "submit" onClick = {handleSubmit}>
                Sign up
            </button>
            
            {error?.type === 'success' && <p> Successful Upload!</p>}
            {error?.type === 'error' && (
                <p> Unsuccessful registry, make sure all fields are correct </p>
            )}    
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

