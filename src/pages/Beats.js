import React, { useState, useEffect } from 'react';
// import AudioPlayer from '../Audioplayer'
// import '../Audioplayer.css';
import Navbar from '../Navbar';
import './Beats.css'
import Footer from '../Footer';




export default function Beats() {    

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
   
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return(
    // <nav> 
    //     <h1 className = 'beatpage'></h1>
    //     {/* <a href='http://localhost:3000/' className= 'whitetlname2' >
    //         MAA Beats  
    //     </a> */}

    //     <h1/>
        
    // </nav>
    <div>
    
    <div className = "starterText">
   Updates/Content Tuesdays
    </div>

  <div className = "starterText2">
  Dm comments/inquiries
  </div>
  <div className = "starterText3">
  Enjoy
  </div>

  <div className = "starterText4">
  7 songs and 17:12 Minutes of freestyle, press play once and it'll run through 'em all
  </div>

  </div> 
    
   


    );
    
}
