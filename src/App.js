import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import MainSec from './MainSec';
import Beats from './pages/Beats'
import Pricing from './pages/Pricing' 
import Footer from './Footer'
import AudioPlayer from './Audioplayer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainSec />
        <AudioPlayer />
          <Route path='/beats' component = {Beats} />
          <Route path='/pricing' component = {Pricing} />
        {/* <Footer />     */}
            
            <a>
            
            </a>
            


      </Router>
    </>
  );
}

export default App;
