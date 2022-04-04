import React, { useState, useEffect, useRef, useContext } from 'react';
import './Login.css'
import './Register.css'
import axios from "axios";
//import { Context } from "../context/Context"


export default function Register() {
    const userRef = useRef();
    const passwordRef = useRef();
    const agreementRef = useRef();

    const [artistName, setArtistName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const[error, setError] = useState(false)

    //Stateless button true/false changer function for our checkbox
    const toggleCheckBox = () => {
        const prevValue = checkBox;
        setCheckBox(!prevValue);
    }
    //const { dispatch, isFetching} = useContext(Context);

    // const PF = "http://localhost:8080/download"
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(false);

    //     if(password === confirmPassword && checkBox === true
    //         && password != "" && email != "" && artistName != "")
    //     try {
    //         const res = await axios.post(PF,   {
    //         artistName,
    //         email,
    //         password,

    //         });
    //         res.data && window.location.replace("/login")
    //     }

    //     catch (err) {
    //         setError(true);
    //     }
    // };    

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
    <section className = "registerSection">
        <header className = "websiteLogo">
            <a href = "/" >
            NextDayBeats.com
            </a>
        </header>
        <h1 className = "signIn">
            Create an account <br></br>& <br></br> Start sharing your productions! 
            
        </h1>

        <form className = "loginForm"  >
            <label className = "usernameFormat"> Your username </label>
            <br></br>
            <input 
                type = "text"
                className = "loginInput"
                placeholder = "Set a username for your profile"
                ref = {userRef}
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

