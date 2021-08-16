import React, { useState, useEffect } from 'react';
// import AudioPlayer from '../Audioplayer'
// import '../Audioplayer.css';
import Navbar from '../Navbar';
// import '../Navbar.css'
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
    <Navbar/>
    
    
    
   


    );
    
}
