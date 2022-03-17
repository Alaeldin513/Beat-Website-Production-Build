import React, {useEffect, useState} from 'react'; 
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About'
import Beats from './pages/Beats'
import Songs from './pages/Songs'
import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'

import LandingPage from './LandingPage'
import SongList from './SongList'

import Context from './context/Context'



function App() {
  
  
  return (
    <>
      <Router>
        {/* <Switch> */}
        
          <Route path ="/" component = {LandingPage}/>   
          <Route path ='/about' component = {About}  />
          <Route path = '/beats' component = {Beats} />
          <Route path = '/songs' component = {Songs} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/upload' component = {Upload} />

          {/* <Route path='/pricing' component = {Pricing} /> */}   
            

        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
