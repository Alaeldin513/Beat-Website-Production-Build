import React, {useState, useRef, useEffect, useMemo} from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './Audioplayer.css';
import {IoMdSkipBackward} from 'react-icons/io'
import {IoMdSkipForward} from 'react-icons/io'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'
import {SongList} from './SongList'
import axios from 'axios';

//includes audioplayer functionality and all songs that are necessary to load


export function AudioPlayer(props) {


    //song API
    const PF = "http://localhost:8080";
    useEffect(() => {
        const fetchSongs = async () => {
            const res = await axios.get( "http://localhost:8080/songs" );
            setSongs(res.data);
        };
        fetchSongs();
    }, []);



    //states
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const [songs, setSongs] = useState([]);


    //references
    const audioPlayer = useRef(); //reference our audio component
    const progressBar = useRef(); //reference to our slider
    const animationRef = useRef(); //references animation of slider
    
    //   function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     let result = Math.floor(Math.random() * (max - min + 1) + min); //The maximum and min are inclusive
    //     return result
    //   }
    // let randint = getRandomInt(0,SongList.length-1);
  
    useEffect(() => { //takes a function as its first parameter, array as second parameter function is what we want it to do
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration (seconds); //coming from variable set 1 line above ^
        
        progressBar.current.max = seconds;
        
          //current is referencing current item in our reference, max is a built in property on our input range
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState,SongList?.loadedmetadata, currentTime,isPlaying]); //array tells us when it wants us to run use effect if we dont use this 
    //it will run every single time component refreshes, empty array only runs once.  seems like once, but problem is audio file may have not loaded
    //audioplayer exists, current exists updated when loadedmetadata is available, do same with readystate tells us when its loaded as well 

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

    const maxTime = (end) => {
        const playTime = end;
        return (playTime);
    }  
    const endSlider = (duration) => {
        if(duration === Number(audioPlayer.current.currentTime)) {
            return SkipSong;
        }
        else {
            return (false);
        }
    }

    //not sure if necessary, firefox/Ios workaround attempt
    const catchError = () => { 
        var playPromise = document.querySelector('audio').play();
        var loadPromise = document.querySelector('audio').load();
        if (playPromise!== undefined) {
            playPromise.then(_ => {
                playPromise();
            })
            .catch(error => {
               loadPromise(); 
            });
        }
    }
//These lines are key to fixing the not playing problem after duration
//and also the skip song working properly make sure to study

//These Lines below were commented out and FIXED the problem 
//seem to work ok in current state but need to watch

    useEffect(() => {
        if(currentSongIndex === 1 && currentTime === 0){
            //catchError(); 
            audioPlayer.current.pause();
            //togglePlayPause();
            
        }
        else { 
            audioPlayer.current.play();
            //catchError(); 
            //audioPlayer.current.pause();
        }
        }, [currentSongIndex]);
        

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

//Insert songs and set them up for skipping function:

const SkipSong = (forwards = true) => {
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

let currentURL = window.location.href;

function URLChecker() {
    if (currentURL.includes('/beats')) {
        return true;
    }
    else {
        return false;
    }
}

useEffect(() => { //function checks everytime we want to see if we want to go to the next song, or navigated pages to un-render audioplayer
    if ( calculateTime(currentTime) === calculateTime(duration)) {
        SkipSong(true);  
    } else {
        if ( URLChecker() ){
            audioPlayer.current.pause();
        }
    }
   //current is referencing current item in our reference, max is a built in property on our input range
}, [duration]);
    

    return (
    
        <div className = "Audioplayer">
            
            <audio src = {SongList[currentSongIndex].src} ref = {audioPlayer} preload = "metadata" >
            </audio>

            <div className ="songPhotoContainer">
            <img className ="songPhoto" src = {SongList[currentSongIndex].img_src} >
            </img>  
            </div> 

            <div className = "currentlyPlaying" >
            Now Playing: 
            <br />
            {SongList[currentSongIndex].title}
            <br/>
            <div class = "test" songs ={songs} > {songs} </div>
            {/* {songs[currentSongIndex].title} */} 
            {/* Not necessary line above, but keeping around in case SongList method breaks and need to keep songs local to audioplayer */}
            </div>

            <button className = "forwardbackward" onClick = {()=> { backSong(); setIsPlaying(true); }} > 
            <IoMdSkipBackward/>  
            
            </button>
            
            <button onClick ={togglePlayPause} className = "playpause"  > 
            { isPlaying?  <GrPauseFill className = "pause" /> : <GrPlayFill className = "play" /> } 
            
            </button>

            <button className = "forwardbackward" onClick = {()=> { SkipSong(); setIsPlaying(true) }}  > 
                <IoMdSkipForward/>
            </button> 
            
            <input type = "range" className = "progressbar" defaultValue = "0" ref = {progressBar} onChange = {changeRange} />

            <div className = "currenttime" > 
            {calculateTime(currentTime)} 
            </div>

            <div className = "duration" > 
            {(duration && !isNaN(duration)) && calculateTime(duration)}
            
            </div>

        </div>

    )
}

export default AudioPlayer;
