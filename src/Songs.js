import React, {useState, useEffect} from 'react';
// import Player from './components/Player/Player';
import Audioplayer from './Audioplayer';
import './Songs.css';
//Contains songs with all their Data including picture and random generation for skipper

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1) + min); //The maximum and min are inclusive
    return result
  }

function Songs() {
  const [songs] = useState([
    {
      title: "Delta Ave",
      artist: "Machine Gun Kelly",
      img_src: "../images/song-1.jpg",
      src: "../beats/ave 5 G MAJ.mp3"
    },
    {
      title: "Trapavelli",
      artist: "2 chainz",
      img_src: "../images/song-2.jpg",
      src: "../beats/trapavelliprod.mp3"
    },
    {
    title: "index3pavelli",
    artist: "2 chainz",
    img_src: "../images/song-2.jpg",
    src: "../beats/trapavelliprod.mp3"
    },
    {
    title: "index4",
    artist: "2 chainz",
    img_src: "../images/song-2.jpg",
    src: "../beats/trapavelliprod.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

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

  return (
    <div className="Songs">
      <Audioplayer
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default Songs;



//https://github.com/TylerPottsDev/rjs-music-app/blob/main/src/components/Player/Player.js

//https://github.com/TylerPottsDev/rjs-music-app/blob/main/src/App.js
