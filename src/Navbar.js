import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiLion } from "react-icons/gi";

function Navbar() {
  
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='wholebar'>
                        <a href='http://localhost:3000/' className= 'logo' onClick={handleClick}>
                            MAA Beats  
                        </a>
                        <a href='http://localhost:3000/' className= 'logopic' onClick={handleClick}>
                            <GiLion/>  
                        </a>

                        <ul className = 'page list'>
                            <a href = 'http://localhost:3000/beats' className ='Beats' onClick={handleClick}>
                              Beats  
                            </a>
                            <a href = 'http://localhost:3000/pricing' className ='Pricing' onClick={handleClick}>
                              Pricing  
                            </a>
                            <a href = 'http://localhost:3000/collaboration' className ='Collaboration' onClick={handleClick}>
                              Collaboration  
                            </a>
                            <a href = 'http://localhost:3000/about' className ='About' onClick={handleClick}>
                              About  
                            </a>
                        </ul>
                        {/* <div className = 'hamburger' onClick={handleClick}>
                            <i className = {click ? 'fas fa-times' : 'fas fa-bars'} 
                            />
                        </div> */}
                </div>
            </nav>
        </>
      );

   
}

export default Navbar;




