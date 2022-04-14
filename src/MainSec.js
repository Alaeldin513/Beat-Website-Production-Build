import React, { useState, useEffect } from 'react';
import './MainSec.css';  
import axios from "axios"


function MainSec () {
    const [posts, setPosts] = useState([]);

    // useEffect(()=> {
    //     const fetchPosts = async()=> {
    //         const res = await axios.get("/login")
    //         console.log(res)
    //         setPosts(res.data);
    //     }
    //     fetchPosts();
    // },[])
    

    return (
        <>
            <div className = 'backsplash'>
                <a href = '/login' className = "login" >
                    Sign in
                </a>  
                    {/* <img 
                    className = 'purplebeach'
                    src = 'images/purplebeach.jpg' 
                    alt='purplebeach'>
                    </img> */}
            </div>
        </>
    );

}

export default MainSec;
