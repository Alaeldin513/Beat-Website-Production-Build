import React, {useState, useRef, useEffect, useMemo} from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './Audioplayer.css';
import {IoMdSkipBackward} from 'react-icons/io'
import {IoMdSkipForward} from 'react-icons/io'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'

//includes audioplayer functionality and all songs that are necessary to load


function AudioPlayer(props) {
    
    const [songs] = useState([
        {
            title: "The Funk",
            artist: "2 chainzprogra",
            img_src: "../images/fire.jpg",
            src: "../beats/the funk prod.mp3",
        },
        {
          title: "Mimosa",  
          artist: "Machine Gun Kelly",
          img_src: "../images/mimosa.jfif",
          src: "../beats/hornsprod.mp3",
            //index loaded into site initially
        },
        {
        title: "Orbit",
        artist: "2 chainz",
        img_src: "../images/orbit.jpg",
        src: "../beats/orbitprod.mp3",
        },
        {
        title: "Trapavelli",
        artist: "2 chainz",
        img_src: "../images/ig88.jfif",
        src: "../beats/trapavelliprod1.mp3",
        }
        ,
        {
        title: "Halftime",
        artist: "2 chainz",
        img_src: "../images/halftime.jfif",
        src: "../beats/halftime Kyrie Prod.mp3",
        }
        ,
        {
        title: "Let it Go",
        artist: "2 chainz",
        img_src: "../images/purplebeach.jpg",
        src: "../beats/let it go prod.mp3",
        }
        ,
        {
        title: "Delta Ave",
        artist: "2 chainz",
        img_src: "../images/hoh.jpg",
        src: "../beats/delta ave prod.mp3",
        }
        ,
        {
        title: "Riding out",
        artist: "2 chainz",
        img_src: "../images/kfc.jfif",
        src: "../beats/Riding out.mp3",
        }        ,
        {
        title: "Rako",
        artist: "2 chainz",
        img_src: "../images/rako.jpg",
        src: "../beats/Rako.mp3",
        }        ,
        {
        title: "Get it",
        artist: "2 chainz",
        img_src: "../images/get.jpg",
        src: "../beats/Get.mp3",
        }        ,
        {
        title: "42 Dugg",
        artist: "2 chainz",
        img_src: "../images/piano.jfif",
        src: "../beats/dugg.mp3",
        }
        ,
        {
        title: "KISS",
        artist: "2 chainz",
        img_src: "../images/kiss.jpeg",
        src: "../beats/KISS1 G prod.mp3",
        }        ,
        {
        title: "Void",
        artist: "2 chainz",
        img_src: "../images/void.jpeg",
        src: "../beats/void prod.mp3",
        }        ,
        {
        title: "Ronald Reagan Era",
        artist: "2 chainz",
        img_src: "../images/ronaldreagan.jpeg",
        src: "../beats/ronald reagan prod.mp3",
        }        ,
        {
        title: "You Ain't Ever",
        artist: "2 chainz",
        img_src: "../images/youaintever.jpeg",
        src: "../beats/you ain't ever prod.mp3",
        }
    ]);
    // const shuffle = (arr) => {
    //     for (let i = songs.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [songs[i], songs[j]] = [songs[j], songs[i]];
    //       }
    // };


    
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    //state

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //references
    const audioPlayer = useRef(); //reference our audio component
    const progressBar = useRef(); //reference to our slider
    const animationRef = useRef(); //references animation of slider
    
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let result = Math.floor(Math.random() * (max - min + 1) + min); //The maximum and min are inclusive
        return result
      }
    
    let randint = getRandomInt(0,songs.length-1);

      
      useEffect(() => { 
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex +1;   
             
              // return currentSongIndex;
            }    
        });
      }, [currentSongIndex]);



    
    useEffect(() => { //takes a function as its first parameter, array as second parameter function is what we want it to do
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration (seconds); //coming from variable set 1 line above ^
        progressBar.current.max = seconds;
        
          //current is referencing current item in our reference, max is a built in property on our input range
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, currentTime,isPlaying]); //array tells us when it wants us to run use effect if we dont use this 
    //it will run every single time component refreshes, empty array only runs once.  seems like once, but problem is audio file may have not loaded
    //audioplayer exists, current exists updated when loadedmetadata is available, do same with readystate tells us when its loaded as well 

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

    // const maxTime = (end) => {
    //     const playTime = end;
    //     return (playTime);
    // }  
    // const endSlider = (duration) => {
    //     if(duration === Number(audioPlayer.current.currentTime)) {
    //         return SkipSong;
    //     }
    //     else {
    //         return (false);
    //     }
    // }


    useEffect(() => {
        if(currentSongIndex === 1 && currentTime === 0){
            // audioPlayer.current.play();
             setIsPlaying(false);
        }
        else { 
            audioPlayer.current.play();
            setIsPlaying(true);
        }
        }, [duration,currentSongIndex]); // for going to next song after duration changes


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

const backButton = () => {
    progressBar.current.value = Number(progressBar.current.value - 15);
    changeRange();
}

const forwardButton = () => {
    progressBar.current.value = Number(progressBar.current.max); 
    changeRange();
    
}
//Insert songs and set them up for skipping function:

const SkipSong = (forwards = true) => {
    if (forwards) {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex
            temp++;

            if (temp > songs.length - 1) {
                temp = 0;
            }
            return temp;
        });
    } else {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp--;

            if (temp < 0) {
                temp = songs.length - 1;
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
                temp = songs.length-1;
            }
            return temp;
        });
    } else {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp++;

            if (temp < 0) {
                temp = songs.length - 1;
            }

            return temp;
        });
    }
}


useEffect(() => { //takes a function as its first parameter, array as second parameter function is what we want it to do
    if ( calculateTime(currentTime) === calculateTime(duration)) {
        console.log('ebola');
        SkipSong(true);  
    } else {
        console.log('john');
    }
   //current is referencing current item in our reference, max is a built in property on our input range
}, [currentTime]);




    return (
        //working below this line
        <div className = "Audioplayer">
            <Link href = 'https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css' rel = "sytlesheet" />
            <audio src = {songs[currentSongIndex].src} ref = {audioPlayer} preload = "metadata" >

            </audio>

            <img className ="songPhoto" src = {songs[currentSongIndex].img_src} >
            </img>   

            <div className = "currentlyPlaying" >
            Now Playing: {songs[currentSongIndex].title}
            </div>



            <button className = "forwardbackward" onClick = {()=> { backSong(); setIsPlaying(true); }} > 
            <IoMdSkipBackward/>  
            
            </button>
            
            <button onClick ={togglePlayPause} className = "playpause"  > 
            { isPlaying?  <GrPauseFill className = "pause"/> : <GrPlayFill className = "play"/> } 
            
            </button>

            <button className = "forwardbackward" onClick = {()=> { SkipSong(); setIsPlaying(true) }}  > 
                <IoMdSkipForward/>
            </button> 
            
            <div className = "currenttime" > 
            {calculateTime(currentTime)} 
            </div>

            <div> 
                <input type = "range" className = "progressbar" defaultValue = "0" ref = {progressBar} onChange = {changeRange} />
            </div>

            <div className = "duration" > 
            {(duration && !isNaN(duration)) && calculateTime(duration)}
            
            </div>

        </div>

    )
}


export default AudioPlayer;
