import React from 'react'; 
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About'
import Beats from './pages/Beats'
import Songs from './pages/Songs'
import LandingPage from './LandingPage'



function App() {

  return (
    <>
      <Router>
        {/* <Switch> */}
        
          <Route path ="/" component = {LandingPage}/>   
          <Route path ='/about' component = {About}  />
          <Route path = '/beats' component = {Beats} />
          <Route path = '/songs' component = {Songs} />

          {/* <Route path='/pricing' component = {Pricing} /> */}   
            

        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
