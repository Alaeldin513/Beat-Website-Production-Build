import React, {useState, useRef, useEffect, useMemo} from 'react'

import './Audioplayer.css';
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'

import Songs from './Songs'



import { render } from '@testing-library/react';
 

function AudioPlayer(props) {
    
    const [songs] = useState([
        {
          title: "Delta Ave",
          artist: "Machine Gun Kelly",
          img_src: "../images/mando.png",
          src: "../beats/ave 5 G MAJ.mp3",
          duration: "149"
        },
        {
          title: "Trapavelli",
          artist: "2 chainz",
          img_src: "../images/purplebeach.jpg",
          src: "../beats/trapavelliprod.mp3",
          duration: "149"
        },
        {
        title: "index3pavelli",
        artist: "2 chainz",
        img_src: "../images/song-2.jpg",
        src: "../beats/trapavelliprod.mp3",
        duration: "149"
        },
        {
        title: "index4",
        artist: "2 chainz",
        img_src: "../images/song-2.jpg",
        src: "../beats/trapavelliprod.mp3",
        duration: "149"
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
            return currentSongIndex + 1;   
            //currentSongIndex = getRandomInt(0,songs.length) 
              // return currentSongIndex;
            }    
        });
      }, [currentSongIndex]);


    //state

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    
    //references
    const audioPlayer = useRef(); //reference our audio component
    const progressBar = useRef(); //reference to our slider
    const animationRef = useRef(); //references animation of slider
    
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration (seconds);
        progressBar.current.max = seconds; 
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

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
    

const durationChecker = (seconds) => {
    if(seconds = songs[currentSongIndex].duration ) {
        SkipSong(true);
    }
}    


// const musicSelector = () => {
//     var Answer = props => 
//     <select>{props.data.map((x,y) => <option key={y}>{x}</option>)}</select>;
// } 
    return (
        //working below this line
        <div className = "Audioplayer">
            <audio src = {songs[currentSongIndex].src} ref = {audioPlayer} preload = "metadata" >
            //'../beats/trapavelliprod.mp3'
            console.log(props.songs[props.currentSongIndex].src)
            </audio>

            <img className ="songPhoto" src = {songs[currentSongIndex].img_src} >
            </img>   

            <div className = "currentlyPlaying" >
            Now Playing: {songs[currentSongIndex].title}
            </div>

            <button className = "forwardbackward" onClick = {backButton} > 
            <BsArrowLeftShort/> 15 
            
            </button>
            
            <button onClick ={togglePlayPause} className = "playpause" > 
            { isPlaying ? <GrPauseFill/> : <GrPlayFill className = "play"/> } 
            </button>

            <button className = "forwardbackward" onClick = {()=> {togglePlayPause(); forwardButton();  }}  > 
                <BsArrowRightShort/>
                //SkipSong();
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
