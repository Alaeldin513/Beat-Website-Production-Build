import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import MainSec from './MainSec';
import About from './pages/About'
import Beats from './pages/Beats'
import Songs from './pages/Songs'

import AudioPlayer from './Audioplayer'

function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
          <Route path ="/" />   
          <Route path ='/about' component = {About} />
          <Route path = '/beats' component = {Beats} />
          <Route path = '/songs' component = {Songs} />
          



          {/* <Route path='/pricing' component = {Pricing} /> */}
            <Navbar />
        <MainSec />
        <AudioPlayer />

        {/* <Footer />     */}
            

        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
