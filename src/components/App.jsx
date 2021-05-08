
import React from 'react';
import Tutorials from './tutorials.jsx';
import {Switch, Route} from 'react-router-dom';
import home from './home';
import about from './about';
import Tutorialdetail from "./tutorialdetail";

export default function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={home} exact/>
         
        <Route path='/about' component={about} exact/>
        <Route path='/tutorial/' component={Tutorials} exact/>
        <Route path='/tutorial/:id/' component={Tutorialdetail}/> 
         {/* <Route component={erorr}/> */}
        
        
        
      </Switch>
    </main>
  )
}

