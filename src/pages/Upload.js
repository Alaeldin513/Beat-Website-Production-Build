import React, { useState, useEffect,useRef, useContext } from 'react';
import {ImFileMusic} from 'react-icons/im';
import {ImImage} from 'react-icons/im';
import axios from "axios";
import {Context} from "../context/Context"


import './Upload.css'

export default function Upload() {    

const trackRef = useRef();
const artistRef = useRef();
const moodRef = useRef();
const audioRef = useRef();
const imageRef = useRef();

const [title,setTitle] = useState(null);
const [artist,setArtist] = useState(null);
const [mood,setMood] = useState(null);
const [songFile, setSongFile] = useState(null);
const [imgFile, setImgFile] = useState(null);

const {user, dispatch} = useContext(Context);
const PF = "http://localhost:8080/songs";


const handleSubmit = async (e) => {
        e.preventDefault();
        const newUpload = {
            title,
            artist,
            mood,
            songFile,
            imgFile
        };
        console.log({newUpload})
    if (songFile && imgFile && title && artist && mood) {
        try {
            await axios.post(PF, newUpload)
        } catch (err) {}
    }
    else {
        console.log("message for not filling all fields")
    }    
}

    return(

            <div className = 'uploadMenu'>
                {/* action = "../../post" method = "post" */}
                <h1 class = "uploadTitle"> Please Fill out Track Info: </h1>
            
            <form className = "uploadForm" enctype = "multipart/form-data"> 
                <div class = "fieldContainer">
                    <label className = "newTrack"> Title* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "trackInput"
                    placeholder = "New Track"
                    ref = {trackRef}
                    onChange = {e=>setTitle(e.target.value)}
                    value = {title}
                    />    
                        <br></br>

                    <label className = "newTrack"> Artist* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "artistInput"
                    placeholder = "Artist Name"
                    ref = {artistRef}
                    onChange = {e=>setArtist(e.target.value)}
                    value = {artist}
                    />    
                        <br></br>

                    <label className = "newTrack"> Mood* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "moodInput"
                    placeholder = "One word description"
                    ref = {moodRef}
                    onChange = {e=>setMood(e.target.value)}
                    value = {mood}   
                    />    
                        <br></br>
                        
                </div>

                <div class = "fileContainer">
                <div class = "songInput"> Mp3/Wav File For Upload* 
                <br/>
                <br/>
                <ImFileMusic  size = {90}/>
                <br/>
                <br/>
                <input 
                accept="audio/*" 
                id="musicUpload"
                type="file" 
                ref = {audioRef}  
                onChange = {(e) => setSongFile(e.target.files[0])}
                />
                </div>
                
                <div class = "imgInput"> jpg/jpeg/png for Upload*
                <br/>
                <br/>
                <ImImage aria-label = "upload image" class = "imgHolder" size = {90}/>
                <br/>
                <br/>
                <input 
                accept="image/*" 
                id="imgUpload"
                type="file" 
                ref = {imageRef} 
                onChange = {(e) => setImgFile(e.target.files[0])}
                 />
                </div>
               
                </div>
            <button class = "uploadButton" type = "submit" onClick = {handleSubmit}> + Upload </button>
            <div> </div>
            </form>
            </div> 





        );
    
    
    
}
    