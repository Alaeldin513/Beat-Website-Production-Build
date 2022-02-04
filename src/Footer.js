import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <div className = 'Footer' >
             <a href="https://www.instagram.com/mike18cincy/" target="_blank"freeCodeCamp >       
                    <img 
                    className = 'insta'
                    src = 'images/insta2.png' 
                    alt='insta'>
                    
                    </img>
              </a>

              {/* <a href="https://www.freecodecamp.org/" target="_blank"freeCodeCamp >
                    <img 
                    className = 'twitter'
                    src = 'images/twitter1.png' 
                    alt='twitter'>
                    </img>
              </a> */}

            </div>

        







  );
}

export default Footer;