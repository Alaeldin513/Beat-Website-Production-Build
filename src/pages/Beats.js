import React, { useState, useEffect,useRef } from 'react';
import {SongList} from '../SongList'
import {AudioPlayer} from '../Audioplayer'
import '../Audioplayer.css';
import Navbar from '../Navbar';

import {IoMdSkipBackward} from 'react-icons/io'
import {IoMdSkipForward} from 'react-icons/io'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'


import './Beats.css'

export function Beats() {    

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const togglePlayPause = () => {
        const prevValue = isPlaying; //grabs state outside so that play button doesn't break from useffect being asyncronous
        setIsPlaying(!prevValue);

        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
        else {
            audioPlayer.current.pause(); 
            cancelAnimationFrame(animationRef.current);
        }   
    }

    useEffect(() => { //takes a function as its first parameter, array as second parameter function is what we want it to do
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration (seconds); //coming from variable set 1 line above ^
        
        progressBar.current.max = seconds;
        
          //current is referencing current item in our reference, max is a built in property on our input range
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, currentTime,isPlaying]);

    useEffect(() => {
        if(currentSongIndex === 0 && currentTime === 0){
            // audioPlayer.current.play();
             setIsPlaying(false);
        }
        else { 
            audioPlayer.current.play();
            setIsPlaying(true);
        }
        }, [currentSongIndex]);

        const whilePlaying = () => { //these two functions could be abstracted but first line different
            progressBar.current.value = audioPlayer.current.currentTime;
            changePlayerCurrentTime();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }


    const clickIndexChanger = (index) => {   
        setCurrentSongIndex(() => {
                let temp = Number(index)
                return temp;
            });
            togglePlayPause();
    }
    const backSong = (backwards = true) => {
        if (backwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp--;
    
                if (temp < 0) {
                    temp = SongList.length-1;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;
    
                if (temp < 0) {
                    temp = SongList.length - 1;
                }
    
                return temp;
            });
        }
    }
    const skipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp++;
    
                if (temp > SongList.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;
    
                if (temp < 0) {
                    temp = SongList.length - 1;
                }
    
                return temp;
            });
        }
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }
    function URLChecker() {
        return false;
    }
    useEffect(() => { //function checks everytime we want to see if we want to go to the next song, or navigated pages to un-render audioplayer
        if ( calculateTime(currentTime) === calculateTime(duration)) {
            // skipSong(true);  
        } 
        else {
            if ( URLChecker() ){
                audioPlayer.current.pause();
            }
        }
       //current is referencing current item in our reference, max is a built in property on our input range
    }, [currentTime]);


    return(
            <div className = 'beatsMenu'>
                <ul class="playlist">
                    <li className = "layoutTitles"> 
                        <p1 class = "titleInformation" style = {{marginLeft: "0px"}}> Title </p1>
                        <p1 class = "titleInformation" id = 'iphoneHider'> Time </p1>
                        <p1 class = "titleInformation" id = 'iphoneHider'> BPM </p1>
                        <p1 class = "titleInformation" id = 'iphoneHider'> Mood </p1>
                        <p1 class = "titleInformation" id = 'iphoneHider'> Artist </p1>
                    </li>
                    
                    {SongList.map((SongList, index) => (
                    <li className = "layoutRow"> 
                        {/* onClick = "function(); function()" */}
                        <img className = "rowItems_img" src = {SongList.img_src} onClick = {togglePlayPause} />
                        <div className = "rowItems" style = {{cursor: "pointer"}} onClick = {() => {clickIndexChanger(index)}}> {SongList.title} </div>
                        <div className = "rowItems" id = 'iphoneHider'> 17:38 </div> 
                        <div className = "rowItems" id = 'iphoneHider'> 169 </div>
                        <div className = "rowItems" id = 'iphoneHider' > Hype, Mysterious </div>    
                        <div className = "rowItems" id = 'iphoneHider' >
                             Toni 
                        </div>  
                    </li> 
                    ))}
                </ul>
                    <input type = "range" className = "progressBar" defaultValue = "0" ref = {progressBar} onChange = {changeRange} />
                <footer className = "bottomPlaybar"> 
                        <div className = "playerInfo">
                            <img className = "playerImg" src = {SongList[currentSongIndex].img_src}/>


                        </div>
                        <div className = "playerButtons">
                            <audio src = {SongList[currentSongIndex].src} ref = {audioPlayer} preload = "metadata" >
                            </audio>
                             
                            <button className = "backwardforward" onClick = {()=> { backSong(); setIsPlaying(true); }} > 
                            <IoMdSkipBackward/>  
                            </button>
                            <button className = "playPause" onClick = {togglePlayPause}>
                            { isPlaying?  <GrPauseFill className = "pause" /> : <GrPlayFill className = "play" /> }
                            </button>
                            <button className = "backwardforward" onClick = {()=> { skipSong(); setIsPlaying(true) }}  > 
                            <IoMdSkipForward/>
                            </button> 

                        </div>
                        <div className = "playerActions"></div>
            </footer>    
            </div> 

            
        );
}

export default Beats;