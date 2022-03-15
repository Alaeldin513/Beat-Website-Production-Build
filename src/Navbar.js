import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { GiAnt } from "react-icons/gi";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';



function Navbar() {
  
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

    return (
        <>
           <nav className='navbar'> 
                
                        {/* <a href='http://localhost:3000/' className= {click ? 'whitetlname' : 'tlname'} >
                         MAA Beats  
                        </a> */}
                        <a href='/' className= 'logopic' >
                            <GiAnt/> 
                        </a>

                        <a href='/' className= {click ? 'whitetlname' : 'tlname'} >
                         Beats by THE Ant Man 
                          </a>
                        <a  className ={click ? 'BurgerChange' : 'BurgerMenu'} onClick={handleClick} >
                            { click ? <GoX/> : <GiHamburgerMenu/> }
                        </a>  

                        {/* <a className ={click ? 'BurgerChange' : 'BurgerMenu'} onClick={handleClick} >
                             { click ? <GoX/> : <GiHamburgerMenu/> }
                        </a> */}
                          {/* <a className='menu-icon' onClick={handleClick}>
                          <i className={click ? 'BurgerMenu' : 'BurgerChange' } />
                          </a> */}
                        {/* <div className = 'hamburger' onClick={handleClick}>
                            <i className = {click ? 'fas fa-times' : 'fas fa-bars'} 
                            />
                        </div> */}
                  
            </nav> 
            <div>
            <h1 className={click ? 'nav-menu active' : 'nav-menu'}>
                      <Link href = "www.google.com" > 
                          
                          <Link to = "/about">
                          <a className={click ? 'Beats' : 'Not-Beats' } onClick={handleClick} >
                              About 
                          </a>
                          </Link>

                          <Link to = "/beats">
                          <a className={click ? 'Beatpage' : 'Not-Beatpage' } onClick={handleClick} >
                              Beats 
                          </a>
                          </Link>

                          <Link to = "/upload">
                          <a className={click ? 'Upload' : 'Not-Upload' } onClick={handleClick} >
                              Upload
                              <br/> 
                          </a>
                          </Link>

                          <Link to = "/songs">
                          <a className={click ? 'Songs' : 'Not-Songs' } onClick={handleClick} >
                              Songs/
                              <br/>Collab 
                          </a>
                          </Link>


                            {/* <a href = 'http://localhost:3000/pricing' className={click ? 'Pricing' : 'Not-Pricing' } onClick={handleClick}>
                              Pricing  
                            </a> */}

                          </Link>  
                        </h1>
            </div>
        </>
      );

   
}

export default Navbar;




