import React, { useState, useEffect,useRef } from 'react';
import AudioPlayer from '../Audioplayer'
import '../Audioplayer.css';
import {ImFileMusic} from 'react-icons/im';
import {ImImage} from 'react-icons/im';


import './Upload.css'

export default function Upload() {    

const trackRef = useRef();
const artistRef = useRef();

    return(

        
        
            
            <div className = 'uploadMenu'>
                {/* action = "../../post" method = "post" */}
                <h1 class = "uploadTitle"> Please Fill out Track Info: </h1>
            
            <form className = "uploadForm"> 
                <div class = "fieldContainer">
                    <label className = "newTrack"> Title* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "trackInput"
                    placeholder = "New Track"
                    ref = {trackRef}
                    />    
                        <br></br>

                <label className = "newTrack"> Artist* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "artistInput"
                    placeholder = "Artist Name"
                    ref = {artistRef}
                    />    
                        <br></br>
                </div>

                <div class = "fileContainer">

                <div class = "songInput"> Mp3 File For Download* 
                <br/>
                <br/>
                <ImFileMusic  size = {90}/>
                <br/>
                <br/>
                <button>Choose file</button>
                </div>
                
                <div class = "imgInput"> jpg/jpeg/png for Download*
                <br/>
                <br/>
                <ImImage class = "imgHolder" size = {90}/>
                <br/>
                <br/>
                <button>Choose file</button>
                </div>
               
                </div>
            <button class = "uploadButton" type = "submit" > + Upload </button>
            </form>


            </div> 





        );
    
    
    
}
    